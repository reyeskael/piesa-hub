# 🏍️ PiesaHub — Feature Documentation & System Architecture

Welcome to the official feature documentation for **PiesaHub**, a comprehensive motorcycle parts discovery, compatibility verification, and e-commerce platform.

---

## 📌 Executive Summary

**PiesaHub** bridges the gap between motorcycle enthusiasts, mechanics, and parts suppliers. It provides precision search tools to ensure parts fit specific motorcycle makes, models, and production years, eliminating compatibility errors and streamlining parts procurement.

---

## 🚀 Core Features

### 1. 🔍 Precision Parts & Compatibility Search
* **Year / Make / Model Filtering:** Users can select their motorcycle's specific manufacturing year, brand (e.g., Honda, Yamaha, Kawasaki, Suzuki), and exact model to filter compatible parts automatically.
* **Category Navigation:** Intuitive categorization covering:
  * Engine & Transmission (Pistons, Clutches, Gaskets, Chains)
  * Braking Systems (Pads, Rotors, Calipers, Lines)
  * Electrical & Ignition (Batteries, Spark Plugs, Stators, ECU)
  * Suspension & Chassis (Forks, Rear Shocks, Bearings)
  * Bodywork & Accessories (Fairings, Mirrors, Grips, Luggage)
* **Keyword & OEM Part Number Lookup:** Search by part name or exact original equipment manufacturer (OEM) serial numbers.

---

### 2. 🛠️ Compatibility Checker ("Fitment Guarantee")
* **Fitment Status Badges:** Visual cues on product pages showing whether a part is a direct fit, requires modification, or is incompatible with the user's saved garage bike.
* **Universal vs. Model-Specific Labeling:** Clear distinction between universal aftermarket accessories and exact-fit replacement components.

---

### 3. 🛵 Virtual Garage
* **Saved Vehicles:** Users can save multiple motorcycles to their profile garage.
* **One-Click Filtering:** Toggle search results and catalog pages to display only items compatible with a selected Garage bike.
* **Maintenance Tracker:** Keep logs of replaced parts, service history, and upcoming maintenance schedules.

---

### 4. 🛒 Cart, Checkout & Order Tracking
* **Multi-Vendor Cart Support:** Seamlessly aggregate items from multiple verified suppliers into a single checkout flow.
* **Order Status Pipeline:** Real-time updates tracking orders from *Pending Confirmation* $\rightarrow$ *Processing* $\rightarrow$ *In Transit* $\rightarrow$ *Delivered*.
* **Inquiry & Request Quote System:** For rare or custom parts, users can submit direct inquiries to vendor networks.

---

### 5. 🏪 Supplier & Vendor Portal
* **Inventory Management:** Vendors can upload, update, and manage inventory levels, pricing, and fitment matrices.
* **Storefront Customization:** Dedicated seller profiles displaying ratings, reviews, shipping policies, and product listings.

---

## 📁 Repository Structure

```text
piesa-hub/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-level page components
│   ├── custom.d.ts        # Global type definitions (CSS, SVG, Assets)
│   ├── setupTests.ts      # Jest test initialization & polyfills
│   ├── App.tsx            # Main application root
│   └── App.test.tsx       # Root unit tests
├── tsconfig.json          # TypeScript compiler configuration
├── jest.config.js         # Jest test runner configuration
└── package.json           # Dependency and script manager
```

---