// model User {
//   id            Int            @id @default(autoincrement())
//   name          String?
//   username      String         @unique
//   createdAt     DateTime       @default(now())
//   password      String
//   phone         String?        @unique
//   avatar        String?
//   orders        Order[]
//   notifications Notification[]
//   roles         Role[]
// }

export type User = {
  id: number;
  name?: string;
  username: string;
  createdAt: string;
  password: string;
  phone?: string;
  avatar?: string;
  orders?: Order[];
  notifications?: Notification[];
  roles: Role[];
};

// model Role {
//   id    Int    @id @default(autoincrement())
//   name  String
//   users User[]
// }

export type Role = {
  id: number;
  name: string;
  users: User[];
};

// enum Status {
//   DRAFT
//   PUBLISHED
//   ARCHIVED
// }

export enum Status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}

// model Product {
//   id          Int      @id @default(autoincrement())
//   title       String
//   description String?
//   image       String?
//   status      Status
//   category    String
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @default(now()) @updatedAt
//   skus        Sku[]
// }

export type Product = {
  id: number;
  title: string;
  description?: string;
  image?: string;
  status: Status;
  category: string;
  createdAt: string;
  updatedAt: string;
  skus: Sku[];
  minPrice: number;
  maxPrice: number;
  headCount: number;
  soldCount: number;
};

// model Sku {
//   id        Int     @id @default(autoincrement())
//   price     Float
//   stock     Int
//   productId Int
//   product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)
//   orders    Order[]
// }

export type Sku = {
  id: number;
  // TODO 改成 number
  price: number;
  stock: number;
  productId: number;
  product: Product;
  orders: Order[];
};

// model Order {
//   id                 Int                 @id @default(autoincrement())
//   orderNo            String              @unique
//   paymentNo          String?             @unique
//   amount             Float
//   status             String
//   user               User                @relation(fields: [userId], references: [id])
//   userId             Int
//   createdAt          DateTime            @default(now())
//   sku                Sku                 @relation(fields: [skuId], references: [id])
//   skuId              Int
//   notificationOrders NotificationOrder[]
// }

export type Order = {
  id: number;
  orderNo: string;
  paymentNo?: string;
  amount: number;
  status: string;
  user: User;
  userId: number;
  createdAt: string;
  sku: Sku;
  skuId: number;
  notificationOrders: NotificationOrder[];
};

// model NotificationOrder {
//   id            Int            @id @default(autoincrement())
//   title         String
//   createdAt     DateTime       @default(now())
//   notifications Notification[]
//   order         Order?         @relation(fields: [orderId], references: [id])
//   orderId       Int?
// }

type NotificationOrder = {
  id: number;
  title: string;
  createdAt: string;
  notifications: Notification[];
  order?: Order;
  orderId?: number;
};

// model Notification {
//   id                  Int                @id @default(autoincrement())
//   templateId          String
//   templateValues      String
//   status              String
//   createdAt           DateTime           @default(now())
//   user                User               @relation(fields: [userId], references: [id])
//   userId              Int
//   notificationOrder   NotificationOrder? @relation(fields: [notificationOrderId], references: [id])
//   notificationOrderId Int?
// }

type Notification = {
  id: number;
  templateId: string;
  templateValues: string;
  status: string;
  createdAt: string;
  user: User;
  userId: number;
  notificationOrder?: NotificationOrder;
  notificationOrderId?: number;
};
