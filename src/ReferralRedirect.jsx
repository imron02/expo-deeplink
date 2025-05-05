import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ReferralRedirect() {
  const { code } = useParams();

  useEffect(() => {
    if (!code) return;

    const fallbackTimeout = setTimeout(() => {
      const playStoreUrl =
        "https://play.google.com/store/apps/details?id=id.meteor.alfamind" +
        `&referrer=utm_source%3Dreferral%26utm_content%3D${encodeURIComponent(
          code
        )}`;
      window.location.href = playStoreUrl;
    }, 1500);

    // Try to open app with deep link
    // Step 1 & 2: Try to open app or fallback to Play Store app
    window.location.href = `alfamind://referral/${encodeURIComponent(code)}`;

    return () => clearTimeout(fallbackTimeout);
  }, [code]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Opening your app...</h1>
      <p>Referral Code: {code}</p>
      <p>If the app doesn't open, you'll be redirected to the Play Store.</p>
    </div>
  );
}
