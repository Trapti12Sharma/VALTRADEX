import React from "react";

const ReferFriend = () => {
  return (
    <section className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#0040FF] mb-4">
          Refer a Friend
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Invite your friends to join VALTRADEX and earn rewards when they start
          trading.
        </p>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold text-[#0040FF] mb-3">
            Steps to Participate
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Share your referral link with friends.</li>
            <li>Your friend registers and deposits a minimum amount.</li>
            <li>You receive a bonus directly in your trading account.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ReferFriend;
