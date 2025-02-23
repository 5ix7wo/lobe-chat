/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/jsx-sort-props */
"use client";

import React, { useState } from 'react';
import { Flex } from 'antd';

import { loadStripe } from "@stripe/stripe-js";
import { PricingItem } from '@/types/blocks/pricing';
import { PricingItemCard } from '@/components/PricingItemCard';


const pricingItems: PricingItem[] = [
  {
    title: 'Hobby',
    description: '0',
    is_popular: true,
    features_title: "Everything in Starter, plus:",
    features: [
      '10 credits for each day',
    ],
    interval: 'month',
    amount: 1,
    price: "$0",
    original_price: "$0",
    unit: "USD",
    product_id: 'hobby',
    product_name: 'HackAIGC Hobby',
    currency: 'USD',
    credits: 10,
    valid_months: 1,
  },
  {
    title: 'Premium',
    description: '0',
    is_popular: true,
    features_title: "Everything in Starter, plus:",
    features: [
      '3000 credits for each month',
    ],
    interval: 'month',
    amount: 1,
    price: "$19.99",
    original_price: "$24.99",
    unit: "USD",
    product_id: 'premium',
    product_name: 'HackAIGC Premium',
    currency: 'USD',
    credits: 3000,
    valid_months: 1,
  },
  {
    title: 'Ultimate',
    description: '0',
    features_title: "Everything in Starter, plus:",
    features: [
      '6000 credits for each month',
    ],
    interval: 'month',
    amount: 1,
    price: "$39.99",
    original_price: "$49.99",
    unit: "USD",
    product_id: 'ultimate',
    product_name: 'HackAIGC Ultimate',
    currency: 'USD',
    credits: 6000,
    valid_months: 1,
  },
  
];



export default function Pricing() {

  const [isLoading, setIsLoading] = useState(false);
  
  const handleCheckout = async (item: PricingItem) => {
    try {
      // if (!user) {
      //   setShowSignModal(true);
      //   return;
      // }

      const params = {
        product_id: item.product_id,
        product_name: item.product_name,
        credits: item.credits,
        interval: item.interval,
        amount: item.amount,
        currency: item.currency,
        valid_months: item.valid_months,
      };

      setIsLoading(true);

      const response = await fetch("/webapi/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (response.status === 401) {
        setIsLoading(false);

        // setShowSignModal(true);
        return;
      }

      const { code, message, data } = await response.json();
      if (code !== 0) {
        // toast.error(message);
        console.log("checkout failed:", message);
        return;
      }

      const { public_key, session_id } = data;

      const stripe = await loadStripe(public_key);
      if (!stripe) {
        // toast.error("checkout failed");
        console.log("checkout failed:", "stripe not found");
        return;
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session_id,
      });

      if (result.error) {
        // toast.error(result.error.message);
        console.log("checkout failed:", result.error.message);
      }
    } catch (e) {
      console.log("checkout failed:", e);

      // toast.error("checkout failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex wrap gap="small" justify="space-evenly">
      {pricingItems.map((item) => (
        <PricingItemCard 
          key={item.product_id} 
          item={item} 
          isLoading={isLoading} 
          handleCheckout={handleCheckout} 
        />
      ))}
    </Flex>
  );
}
