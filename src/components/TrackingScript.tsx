"use client";

import Script from "next/script";

export function TrackingScript() {
  return (
    <Script id="babes-tracking" strategy="afterInteractive">
      {`
        (function() {
          const API_BASE = "https://be-babes.ftes.cloud";

          function detectDevice(ua) {
            ua = ua || navigator.userAgent;
            if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
              if (/iPad|Tablet|Android(?!.*Mobile)/i.test(ua)) return "tablet";
              return "mobile";
            }
            if (/Tablet|iPad/i.test(ua)) return "tablet";
            return "desktop";
          }

          function trackVisit() {
            const payload = {
              deviceType: detectDevice(navigator.userAgent),
              userAgent: navigator.userAgent,
              ipAddress: "",
              pageUrl: window.location.href
            };

            fetch(API_BASE + "/api/analytics/track", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            })
            .then(function(res) {
              if (!res.ok) return;
              return res.json();
            })
            .then(function(data) {
              if (data && data.sessionId) {
                window.__babesSessionId = data.sessionId;
                try {
                  sessionStorage.setItem("babes_session_id", data.sessionId);
                } catch (e) {}
              }
            })
            .catch(function(err) {
              console.error("[BABÉ Tracking] track error:", err);
            });
          }

          if (document.readyState === "complete") {
            trackVisit();
          } else {
            window.addEventListener("load", trackVisit);
          }
        })();
      `}
    </Script>
  );
}
