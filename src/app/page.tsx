"use client";

import { MobileLayout } from "@/layout/mobile";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { FloatingPanelQR } from "@/components/floating-panel";

export default function Page() {
  return (
    <MobileLayout>
      <QrScanner
        onDecode={result => console.log(result)}
        onError={error => console.log(error?.message)}
        constraints={{ width: 1920, height: 720 }}
      />

      <FloatingPanelQR />
    </MobileLayout>
  );
}
