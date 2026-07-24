# PiesaHub — Motorcycle Parts & Components Sourcing Platform

## Project Overview

**PiesaHub** is a specialized digital platform and inventory network designed to streamline motorcycle parts and components sourcing. By providing real-time visibility into local motor shops and auto-supply vendors, PiesaHub connects motorcycle riders with verified nearby suppliers, making it seamless to find, verify, and purchase compatible spare parts.

---

## System Architecture: Dual Portal Structure

To deliver a seamless transaction experience, PiesaHub operates through two dedicated user portals:

* **1. Rider (Buyer) Portal:** A consumer-facing mobile application focused on compatible part discovery, order/reservation management, and saved vehicle garage profiles.
* **2. Merchant (Seller) Portal:** A business portal for local motor shops and suppliers to manage their store profile, list available parts inventory, respond to customer chats, and fulfill orders/reservations.

---

## Rider Application Structure & Tab Navigation

The Rider App utilizes a streamlined 3-tab navigation structure designed for direct utility:

| Tab Name | Core Responsibility |
| :--- | :--- |
| **1. Search** | Primary entry point for part lookup, compatibility filtering, nearby shop highlights, and active shop discovery. |
| **2. History** | Central hub for tracking active orders, chat conversations with suppliers, pending reservations, and past receipts. |
| **3. Garage** | Vehicle management hub to add, edit, and switch active motorcycles used for fitment filtering. |

---

## Minimum Viable Product (MVP) Scope

### 🏍️ Rider (Buyer) Portal

#### **1. Authentication**
* **Google OAuth Sign-In:** Quick, secure authentication via Google account.

#### **2. Search Tab (Primary Landing)**
* **Active Bike Selector Bar:** Header toggle showing the currently selected motorcycle from the user's garage.
* **Smart Part Search & Filter:**
  * Auto-filter parts compatible with the active garage motorcycle.
  * Manual search by Brand, Model, Year, Category, or Keyword.
* **Nearby Shop Highlighting:** Display local shops carrying the chosen part, highlighting the **nearest** or **best** supplier based on user location.
* **Direct Supplier Chat & Booking:** Initiate direct chat to confirm stock and place a reservation/purchase (**Pickup** or **Delivery**).

#### **3. History Tab**
* **Active Transactions:** Real-time updates on pending reservations, active chats with sellers, and current orders.
* **Transaction History:** Complete log of completed and canceled purchases/reservations.

#### **4. Garage Tab**
* **My Garage:** Add, edit, and select default motorcycles (Brand, Model, Year, Variant/Displacement).

---

### 🏪 Merchant (Seller) Portal
* **Store Profile Management:** Basic onboarding with shop details (business name, location, operating hours, contact details).
* **Inventory & Catalog Management:** Simple interface to list parts, set prices, specify compatibility, and update stock status.
* **Order & Reservation Management:** View incoming requests, accept/reject orders, and update order status (`Pending` → `Confirmed` → `Ready for Pickup/Delivery` → `Completed`).
* **Merchant Chat Interface:** Receive and reply to customer inquiries regarding part fitment and availability.

---

## Product Roadmap

### Phase 1: Minimum Viable Product (MVP)

#### 🏍️ Rider Side (Search, History, Garage)
* [ ] Google OAuth login integration.
* [ ] **Garage Tab:** Vehicle management module (add/select active motorcycle).
* [ ] **Search Tab:**
  * Vehicle-fitment search & filtering engine.
  * Nearby supplier list highlighting the best/nearest shop.
  * Direct buyer-to-seller chat initiation.
  * Reservation and order placement flow (Pickup / Delivery).
* [ ] **History Tab:** Active orders, ongoing chat threads, and past transaction records.

#### 🏪 Merchant Side
* [ ] Merchant account creation & store profile setup.
* [ ] Basic inventory management (add/edit parts, set stock & pricing).
* [ ] Order status management dashboard (Accept/Reject/Fulfill orders).
* [ ] Merchant chat interface for customer inquiries.

---

### Phase 2: Enhanced Discovery & Marketplace Integration

#### 🏍️ Rider Side Evolution
* [ ] **Search Tab Updates:**
  * **Interactive Map View:** Switch from list view to a full map screen showing pin locations of nearby suppliers stocking the selected part.
  * **Favorite Shop Filter:** Quick filter button to show stock exclusively from saved/favorite local shops.
* [ ] **History Tab Updates:**
  * **Ratings & Reviews:** Rate and review both motor shops and individual parts directly from completed items in the History tab.
* [ ] **Platform Upgrades:**
  * **Integrated Payment Gateway:** In-app payment processing via E-wallets and Credit/Debit cards.

#### 🏪 Merchant Side Evolution
* [ ] **Enhanced Merchant Dashboard:** Sales reports, popular search analytics, and fast-moving item metrics.
* [ ] **Bulk Inventory Upload:** CSV / Excel import tool to upload large stock lists rapidly.
* [ ] **Store Rating & Feedback View:** Monitor customer reviews and ratings to build shop reputation.

---

### Phase 3: Advanced Intelligence & Ecosystem Expansion
* [ ] **Push Notification Engine:** Instant alerts for chat messages, order status updates in History, and shop stock notifications.
* [ ] **Third-Party Logistics API Integration:** Automated dispatch for same-day delivery via local courier networks.
* [ ] **Automated VIN/Chassis Decoder:** Instant vehicle specs auto-fill via VIN scan inside the Garage Tab.
* [ ] **Rider Community & Maintenance Logs:** Maintenance history logs attached to vehicles inside the Garage Tab.

---

*PiesaHub — Sourcing the right motorcycle part, every time.*
