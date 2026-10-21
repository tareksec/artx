---
title: "Nagad Payment Gateway Integration in Bangladesh: API Documentation, Charges & Developer Setup (2026)"
slug: "nagad-payment-gateway-bangladesh"
metaTitle: "Nagad Payment Gateway Bangladesh | API Guide & Integration 2026 | ArtX"
metaDescription: "Integrate Nagad Payment Gateway in Bangladesh. Complete developer API guide, RSA encryption keys, merchant account requirements, fee breakdown & WooCommerce setup."
date: "2026-10-21"
author: "Marcus Webb"
role: "Lead Engineer, ArtX"
category: "Payment Gateways & APIs"
readTime: 12
keywords: ["nagad payment gateway bangladesh", "nagad payment gateway api", "nagad merchant account api", "nagad api documentation 2026", "nagad woocommerce integration bd"]
---

# Nagad Payment Gateway Integration in Bangladesh: API Documentation, Charges & Developer Setup (2026)

With over **90 million registered subscribers** across Bangladesh, **Nagad** (the digital financial service of Bangladesh Post Office) has become an indispensable checkout method for modern digital commerce. 

For e-commerce store owners and software developers, integrating the **Nagad Payment Gateway API** offers significant commercial advantages:
- **Lower Merchant Commission:** Nagad offers competitive merchant discount rates (typically 1.2% to 1.5%, compared to 1.5% to 1.85% for competitors).
- **Universal Population Reach:** Extensive adoption across Tier-2 and Tier-3 districts, semi-urban markets, and government stipend recipients.
- **Direct Bank Settlement:** Automated T+1 business day settlements directly into your verified commercial bank account.

However, from an engineering perspective, Nagad's API employs a strict **Public/Private Key RSA Cryptography Architecture** that trips up many junior developers.

At [ArtX](https://artxdev.tech/), our software engineers have integrated secure payment gateways across hundreds of enterprise portals and e-commerce stores. Here is the definitive technical guide to integrating Nagad Payment Gateway in 2026.

---

## Quick Answer: How Do You Integrate Nagad Payment Gateway in Bangladesh?

> **The Short Answer:** Integrating the Nagad Payment Gateway API involves five core steps:
> 1. **Obtain Merchant Credentials:** Apply with your verified Trade License, TIN, NID, and Bank Statement to receive your `Merchant ID`, `PG Public Key`, and `Merchant Private Key`.
> 2. **Generate Cryptographic Payload:** Encrypt request timestamps and order parameters using RSA encryption (SHA-256) with Nagad's Public Key, while signing the payload with your Merchant Private Key.
> 3. **Initialize Transaction:** Send a `POST` request to `https://api.mynagad.com/api/dfs/check-out/initialize/{merchantId}/{orderId}` to retrieve a secure `paymentReferenceId` and checkout redirection URL.
> 4. **Handle Customer Redirect & Callback:** The customer enters their Nagad PIN and OTP on the official Nagad payment page. Nagad redirects back to your callback URL with status parameters.
> 5. **Verify Payment Status:** Execute a server-to-server verification query to confirm funds have been transferred before marking the order as "Processing" or "Completed" in your database.

Explore our e-commerce engineering services on our [Web Development Hub](/services) and review our payment systems on our [Work Page](/work).

---

## Nagad Payment Gateway: Operational & Fee Structure

| Parameter | Nagad Payment Gateway Standard | Notes / Comparison |
|---|---|---|
| **Merchant Commission Rate** | 1.2% – 1.5% | Among the lowest MFS merchant rates in BD |
| **Setup / Onboarding Fee** | ৳0 BDT (Direct Nagad) / ৳5k–৳10k via Aggregators | Direct API application carries no setup fee |
| **Settlement Timeline** | T+1 Business Day (Sunday–Thursday) | Direct BEFTN / NPSB transfer to corporate bank |
| **Security Mechanism** | Asymmetric RSA PKCS#1 v1.5 / SHA-256 | High-grade financial cryptographic validation |
| **Supported Currencies** | BDT (Bangladeshi Taka) | Primary domestic settlement currency |
| **Refund API Support** | Supported via Portal / Automated Refund API | Enables instant customer reversal handling |

---

## Step-by-Step Developer Implementation Guide

### Step 1: RSA Key Generation
Nagad requires OpenSSL key generation:
```bash
# Generate 2048-bit Merchant Private Key
openssl genrsa -out merchant_private_key.pem 2048

# Extract Merchant Public Key to submit to Nagad
openssl rsa -in merchant_private_key.pem -pubout -out merchant_public_key.pem
```
Submit `merchant_public_key.pem` to the Nagad merchant onboarding team. In return, they will provide you with `nagad_pg_public_key.pem` and your unique `merchantId`.

### Step 2: Payment Initialization Payload (Node.js Implementation)
The checkout initialization requires encrypted sensitive fields:

```javascript
import crypto from 'crypto';
import axios from 'axios';

const MERCHANT_ID = process.env.NAGAD_MERCHANT_ID;
const MERCHANT_PRIVATE_KEY = process.env.NAGAD_PRIVATE_KEY;
const NAGAD_PUBLIC_KEY = process.env.NAGAD_PUBLIC_KEY;

// Helper: Encrypt with Nagad Public Key
function encryptWithPublicKey(data) {
  return crypto.publicEncrypt(
    {
      key: NAGAD_PUBLIC_KEY,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    Buffer.from(JSON.stringify(data))
  ).toString('base64');
}

// Helper: Sign with Merchant Private Key
function signWithPrivateKey(data) {
  const sign = crypto.createSign('SHA256');
  sign.update(JSON.stringify(data));
  sign.end();
  return sign.sign(MERCHANT_PRIVATE_KEY, 'base64');
}

export async function initiateNagadPayment(orderId, amount, callbackUrl) {
  const dateTime = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
  
  const sensitiveData = {
    merchantId: MERCHANT_ID,
    datetime: dateTime,
    orderId: orderId,
    challenge: crypto.randomBytes(20).toString('hex')
  };

  const postData = {
    dateTime: dateTime,
    sensitiveData: encryptWithPublicKey(sensitiveData),
    signature: signWithPrivateKey(sensitiveData)
  };

  const response = await axios.post(
    `https://api.mynagad.com/api/dfs/check-out/initialize/${MERCHANT_ID}/${orderId}`,
    postData,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-KM-Api-Version': 'v-0.2.0',
        'X-KM-IP-V4': 'YOUR_SERVER_IP',
        'X-KM-Client-Type': 'PC_WEB'
      }
    }
  );

  return response.data; // Contains paymentReferenceId and redirect URL
}
```

### Step 3: Server-to-Server Verification (Crucial Security Check)
Never mark an order as paid simply because a user returned to your callback URL with `status=success` in the query string. Attackers can forge browser redirects. 

Always execute a backend `GET` request to verify the transaction status:
```bash
GET https://api.mynagad.com/api/dfs/verify/payment/{paymentRefId}
```
Only when the verified JSON response contains `"status": "Success"` should your database update the order state.

---

# বাংলা সংস্করণ: নগদ পেমেন্ট গেটওয়ে বাংলাদেশ: এপিআই ও মার্চেন্ট অ্যাকাউন্ট গাইড (২০২৬)

## কেন আপনার ওয়েবসাইটে নগদ পেমেন্ট গেটওয়ে যুক্ত করবেন?

বাংলাদেশে বর্তমানে ৯ কোটিরও বেশি মানুষ **নগদ (Nagad)** ব্যবহার করছেন। বিশেষ করে সরকারি ভাতা, উপবৃত্তি এবং দেশের প্রত্যন্ত অঞ্চলের বিশাল জনগোষ্ঠীর কাছে নগদ অত্যন্ত জনপ্রিয়।

### নগদের প্রধান সুবিধাসমূহ:
১. **কম মার্চেন্ট ফি:** অন্যান্য মোবাইল ব্যাংকিংয়ের তুলনায় নগদের চার্জ সাধারণত কম (১.২% থেকে ১.৫%)।
২. **সহজ ব্যাংক সেটেলমেন্ট:** প্রতিদিনের বিক্রির টাকা পরবর্তী কার্যদিবসে সরাসরি আপনার ব্যাংক অ্যাকাউন্টে জমা হয়ে যায়।
৩. **নিরাপদ চেকআউট:** আরএসএ এনক্রিপশনের মাধ্যমে শতভাগ নিরাপদ লেনদেন সম্পন্ন হয়।

---

## নগদ মার্চেন্ট অ্যাকাউন্ট খোলার প্রয়োজনীয় কাগজপত্র:
১. হালনাগাদ ট্রেড লাইসেন্স (Trade License)
২. কোম্পানির ই-টিন (TIN Certificate)
৩. ব্যবসায়িক ব্যাংক অ্যাকাউন্ট স্টেটমেন্ট ও চেকের কপি
৪. উদ্যোক্তার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি

---

## ওয়ার্ডপ্রেস (WooCommerce) সাইটে নগদ কীভাবে যুক্ত করবেন?
আপনার ওয়েবসাইট যদি ওয়ার্ডপ্রেস দিয়ে তৈরি হয়, তবে কোডিং ছাড়াও অফিসিয়াল **Nagad WooCommerce Plugin** অথবা **SSLCommerz / Shurjopay** এগ্রিগেটরের মাধ্যমে মাত্র ১০ মিনিটে নগদ পেমেন্ট গেটওয়ে সেটআপ করা যায়।

ArtX-এর ইঞ্জিনিয়ারিং টিম কাস্টম ওয়েবসাইট বা ওয়ার্ডপ্রেস স্টোরে নগদ পেমেন্ট গেটওয়ে সম্পূর্ণ সিকিউরভাবে ইন্টিগ্রেশনের দায়িত্ব নিয়ে থাকে। বিস্তারিত জানতে আমাদের [Web Development Services](/services) দেখুন।

---

## Frequently Asked Questions (FAQ)

### What is the merchant fee for Nagad Payment Gateway in Bangladesh?
Direct Nagad merchant rates typically range between **1.2% to 1.5%** for domestic transactions, making it one of the most cost-effective MFS options in Bangladesh.

### Can individuals without a trade license integrate the Nagad Payment Gateway API?
No. An official automated Nagad Payment Gateway API requires a registered legal business entity with a valid Trade License and business bank account. Unregistered individuals must rely on manual Personal/Agent bKash/Nagad transactions or use third-party micro-merchant solutions.

### Does ArtX handle the complete Nagad API integration for e-commerce websites?
Yes! ArtX provides turnkey payment gateway integrations for Nagad, bKash, Rocket, and international credit cards for both WooCommerce and custom React/Node.js platforms. Contact our team via our [Pricing Page](/pricing).

---

## Integrate Nagad with ArtX Today
- **Lead Integration Engineer:** Marcus Webb
- **Creative Director:** Muhammad Tarek (MD Tarek)
- **WhatsApp:** +8801645441584
- **Email:** artxstudiocom@gmail.com
- **Website:** [https://artxdev.tech](https://artxdev.tech)

---
