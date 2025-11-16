# Data Layer

This folder contains all the static data for the website. All content is centralized here to make it easy to migrate to a database later.

## Structure

- **services.ts** - All business services data
- **products.ts** - All product catalog data
- **company.ts** - Company information, addresses, contact details
- **testimonials.ts** - Customer testimonials and reviews
- **index.ts** - Central export file

## Database Migration Guide

When you're ready to connect to a database, follow these steps:

### 1. Choose Your Database
- **PostgreSQL** (Recommended for production)
- **MongoDB** (Good for flexible schemas)
- **MySQL** (Traditional relational database)
- **Supabase** (PostgreSQL with built-in auth)
- **Firebase** (Real-time database)

### 2. Create Database Schema

#### Services Table
```sql
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  icon VARCHAR(10),
  description TEXT,
  features JSONB,
  link VARCHAR(255),
  color VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image VARCHAR(255),
  description TEXT,
  category VARCHAR(50),
  rating DECIMAL(2, 1),
  badge VARCHAR(50),
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Company Info Table
```sql
CREATE TABLE company_info (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  tagline VARCHAR(255),
  description TEXT,
  email VARCHAR(255),
  phone_main VARCHAR(50),
  phone_branch VARCHAR(50),
  address_main JSONB,
  address_branch JSONB,
  social JSONB,
  certifications JSONB,
  business_hours JSONB,
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Create API Routes

Create API routes in `app/api/` folder:

```typescript
// app/api/services/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Your database connection

export async function GET() {
  const services = await db.query('SELECT * FROM services ORDER BY id');
  return NextResponse.json(services.rows);
}
```

### 4. Replace Static Imports

Instead of:
```typescript
import { services } from '@/data/services';
```

Use:
```typescript
const services = await fetch('/api/services').then(res => res.json());
```

Or use a data fetching library like:
- **SWR** - `npm install swr`
- **React Query** - `npm install @tanstack/react-query`
- **Prisma** - `npm install prisma @prisma/client`

### 5. Example with Prisma

1. Install Prisma:
```bash
npm install prisma @prisma/client
npx prisma init
```

2. Define schema in `prisma/schema.prisma`:
```prisma
model Service {
  id          Int      @id @default(autoincrement())
  title       String
  icon        String?
  description String?
  features    Json?
  link        String?
  color       String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

3. Use in components:
```typescript
import { prisma } from '@/lib/prisma';

export async function getServices() {
  return await prisma.service.findMany();
}
```

## Current Usage

All pages currently import from this data folder:
- `app/business-solutions/page.tsx` - Uses `services`
- `app/shop/all/page.tsx` - Uses `products`
- `components/Footer.tsx` - Uses `companyInfo`, `navigationLinks`
- `components/Header.tsx` - Uses `navigationLinks`

## Benefits of This Structure

✅ **Easy to maintain** - All data in one place
✅ **Type-safe** - TypeScript interfaces for all data
✅ **Database-ready** - Structured for easy migration
✅ **Reusable** - Import anywhere in the app
✅ **Testable** - Easy to mock for testing

## Next Steps

1. Set up your database
2. Create API routes
3. Replace static imports with API calls
4. Add caching for better performance
5. Implement admin panel for content management
