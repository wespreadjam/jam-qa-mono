import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Brindle pricing: Basic free for one location, Plus $3 per employee, Pro $5 per employee.',
};

export default function Pricing() {
  return (
    <>
      <h1>Pricing</h1>
      <table>
        <thead><tr><th>Plan</th><th>Price</th><th>Includes</th></tr></thead>
        <tbody>
          <tr><td>Basic</td><td>$0</td><td>1 location, up to 15 employees</td></tr>
          <tr><td>Plus</td><td>$3 / employee / month</td><td>Auto-scheduling, SMS swaps, time clock</td></tr>
          <tr><td>Pro</td><td>$5 / employee / month</td><td>Multi-location, labor-law compliance, payroll export</td></tr>
        </tbody>
      </table>
    </>
  );
}
