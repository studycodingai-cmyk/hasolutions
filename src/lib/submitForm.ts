export interface FormPayload {
  name: string;
  phone?: string;
  email: string;
  company: string;
  service: string;
  message: string;
  source: string;
}

// Access key from Web3Forms
export const WEB3FORMS_ACCESS_KEY = 
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "4d75c418-7ba5-4078-a63b-7ee76940f27f";

export async function submitConsultationRequest(payload: FormPayload): Promise<{ ok: boolean; error?: string }> {
  const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
  let hasSuccess = false;

  // 1. Submit to Web3Forms (Delivers directly to your private inbox via Access Key)
  if (WEB3FORMS_ACCESS_KEY) {
    try {
      const w3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[cungcapgiaiphap.com] Yêu cầu tư vấn mới từ ${payload.name} (${payload.company})`,
          from_name: "cungcapgiaiphap.com",
          name: payload.name,
          phone: payload.phone || "Chưa cung cấp",
          email: payload.email,
          company: payload.company,
          service: payload.service,
          message: payload.message || "Không có ghi chú thêm",
          source: payload.source,
          submittedAt: timestamp,
        }),
      });

      const data = await w3Res.json();
      if (data.success || w3Res.ok) {
        hasSuccess = true;
      } else {
        console.warn("Web3Forms response not successful:", data);
      }
    } catch (err) {
      console.warn("Web3Forms submission failed:", err);
    }
  }

  // 2. Submit to Netlify native forms (works natively on netlify edge)
  try {
    const netlifyBody = new URLSearchParams({
      "form-name": "tu-van",
      name: payload.name,
      phone: payload.phone || "",
      email: payload.email,
      company: payload.company,
      service: payload.service,
      message: payload.message || "Không có ghi chú thêm",
      source: payload.source,
      submittedAt: timestamp,
    });

    const netlifyRes = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: netlifyBody.toString(),
    });

    if (netlifyRes.ok) {
      hasSuccess = true;
    }
  } catch (err) {
    console.warn("Netlify forms submission failed:", err);
  }

  if (hasSuccess) {
    return { ok: true };
  }

  return { 
    ok: false, 
    error: "Không thể kết nối đến máy chủ tiếp nhận lúc này. Vui lòng thử lại sau ít phút!" 
  };
}

