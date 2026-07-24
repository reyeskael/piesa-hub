```mermaid
flowchart TD
    %% App Launch & Portal Switch
    Start([App Launch / Portal Access]) --> RoleCheck{Select Role / Logged In?}
    
    RoleCheck -- Rider / Buyer --> RiderAuth[Google OAuth Login]
    RoleCheck -- Merchant / Seller --> MerchantAuth[Merchant Login / Portal Sign-In]

    %% ==================================================
    %% 1. RIDER (BUYER) PORTAL FLOW
    %% ==================================================
    RiderAuth --> RiderActiveBikeCheck{Active Bike Set?}
    RiderActiveBikeCheck -- No --> AddBikePrompt[Prompt: Add Motorcycle]
    AddBikePrompt --> R_GarageTab
    RiderActiveBikeCheck -- Yes --> R_SearchTab

    subgraph RIDER_PORTAL ["🏍️ RIDER (BUYER) PORTAL"]
        
        %% TAB 1: SEARCH
        subgraph R_TAB1 ["🔍 Tab 1: Search"]
            R_SearchTab[Search Home Screen] --> ActiveBikeHeader[Active Bike Header Bar]
            ActiveBikeHeader -->|Switch Bike| R_GarageTab
            
            R_SearchTab --> SearchBar[Search by Keyword / Category]
            SearchBar --> SearchResults[Compatible Parts List]
            
            SearchResults --> SelectPart[Select Compatible Part]
            SelectPart --> ShopHighlights[Nearby Shops List Screen]
            
            ShopHighlights -->|Highlight Nearest/Best| ShopCard[Select Shop / Supplier]
            ShopCard --> PartDetailView[Part & Shop Detail View]
            
            PartDetailView --> ChatBtn[Click: Chat Supplier]
            PartDetailView --> ReserveBtn[Click: Reserve / Buy]
        end

        %% TAB 2: HISTORY
        subgraph R_TAB2 ["📜 Tab 2: History"]
            R_HistoryTab[History Screen] --> ActiveOrders[Active Transactions Section]
            R_HistoryTab --> PastOrders[Past Receipts & History]
            
            ActiveOrders --> ActiveOrderItem[Select Active Order / Chat]
            ActiveOrderItem --> R_OrderDetailView[Order Status & Chat View]
            
            PastOrders --> PastOrderItem[Select Completed Order]
            PastOrderItem --> ReceiptView[Transaction Receipt]
        end

        %% TAB 3: GARAGE
        subgraph R_TAB3 ["🏍️ Tab 3: Garage"]
            R_GarageTab[Garage Screen] --> BikeList[Saved Motorcycles List]
            
            BikeList -->|Set Primary| SetActiveBike[Set Active Bike]
            BikeList --> AddBikeBtn[Add Motorcycle]
            
            AddBikeBtn --> BikeForm[Select Brand ➔ Model ➔ Year ➔ Variant]
            BikeForm --> SaveBike[Save Vehicle to Garage]
            SaveBike --> BikeList
        end
    end

    %% ==================================================
    %% 2. MERCHANT (SELLER) PORTAL FLOW
    %% ==================================================
    subgraph MERCHANT_PORTAL ["🏪 MERCHANT (SELLER) PORTAL"]
        MerchantAuth --> M_Dashboard[Merchant Dashboard / Overview]

        %% Inventory Management
        M_Dashboard --> M_Inventory[Inventory & Catalog Manager]
        M_Inventory --> AddPart[Add / Edit Part]
        AddPart --> FitmentMapping[Set Price, Stock & Compatible Bike Models]
        FitmentMapping --> SavePart[Update Stock Status]

        %% Order Fulfillment
        M_Dashboard --> M_Orders[Orders & Reservations Desk]
        M_Orders --> IncomingOrders[View Pending Requests]
        IncomingOrders --> AcceptReject{Accept or Reject?}
        
        AcceptReject -- Accept --> UpdateStatus[Update Status: Confirmed ➔ Ready for Pickup/Delivery]
        AcceptReject -- Reject --> CancelOrder[Notify Buyer: Order Canceled]

        %% Buyer Messaging
        M_Dashboard --> M_Chat[Customer Inquiries / Chat Inbox]
        M_Chat --> ChatThread[Select Buyer Message Thread]
        ChatThread --> ReplyBuyer[Confirm Stock / Send Custom Offer]
    end

    %% ==================================================
    %% CROSS-PORTAL INTERACTIONS (BUYER ↔ MERCHANT)
    %% ==================================================
    ChatBtn -->|Initiate Inquiry| ChatThread
    ReserveBtn -->|Send Order Request| IncomingOrders
    UpdateStatus -->|Status Sync| R_OrderDetailView
    ReplyBuyer -->|Live Reply Sync| R_OrderDetailView
    SavePart -->|Refreshes Live Inventory| SearchResults
    SetActiveBike -->|Updates Search Filters| R_SearchTab

    %% Styling
    classDef riderStyle fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef merchantStyle fill:#fff3e0,stroke:#f57c00,stroke-width:2px;
    classDef focusStyle fill:#e8f5e9,stroke:#388e3c,stroke-width:2px;
    
    class R_SearchTab,R_HistoryTab,R_GarageTab riderStyle;
    class M_Dashboard,M_Inventory,M_Orders,M_Chat merchantStyle;
    class PartDetailView,R_OrderDetailView,IncomingOrders focusStyle;
```
