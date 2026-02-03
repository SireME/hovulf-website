export default function DonationMethods() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Ways to Donate</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Mobile Money */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            📱 Mobile Money (Cameroon)
          </h3>
          <p className="text-gray-700">
            <strong>MTN MoMo:</strong> 237 677 35 75 44
          </p>
          <p className="text-gray-700">
            <strong>Orange Money:</strong> 237 656 47 52 04
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Account Name: Yelluma Bihnwi Tayoh Perpetua
          </p>
        </div>

        {/* Bank Transfer */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            🏦 Bank Transfer
          </h3>
          <p className="text-gray-700">
            <strong>Bank:</strong> ECOBANK
          </p>
          <p className="text-gray-700">
            <strong>Account Name:</strong> Yelluma Bihnwi Tayoh Perpetua
          </p>
          <p className="text-gray-700">
            <strong>Account No:</strong> 30700009937
          </p>
        </div>

        {/* PayPal */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            🌍 International Donation
          </h3>
          <p className="text-gray-700 mb-4">
            Support our work from anywhere in the world via PayPal.
          </p>
          <button
            disabled
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold opacity-70 cursor-not-allowed"
          >
            Donate Securely (PayPal)
          </button>
          <p className="text-xs text-gray-500 mt-2">
            PayPal integration coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}

