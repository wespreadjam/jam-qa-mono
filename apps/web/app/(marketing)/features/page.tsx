import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Auto-scheduling, shift swaps, time clock and labor-law compliance.',
};

export default function Features() {
  return (
    <>
      <h1>Features</h1>
      <h2>Auto-scheduling</h2>
      <p>Brindle reads your POS sales forecast and drafts a schedule that matches demand.</p>
      <h2>Shift swaps</h2>
      <p>Employees trade shifts by text. Managers approve with one tap.</p>
      <h2>Time clock</h2>
      <p>A tablet time clock with photo capture and geofencing.</p>
      <h2>Compliance</h2>
      <p>Predictive-scheduling rules for NYC, Chicago, Seattle, Oregon and more.</p>
    </>
  );
}
