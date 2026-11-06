import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Đang khởi tạo dữ liệu mẫu (Seed Data) ---');

  // 1. Tạo Users mẫu
  const salt = await bcrypt.genSalt(10);
  const adminPass = await bcrypt.hash('Admin123@', salt);
  const staffPass = await bcrypt.hash('Staff123@', salt);
  const customerPass = await bcrypt.hash('Customer123@', salt);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@autobot.vn' },
    update: {},
    create: {
      name: 'Quản Trị Viên Autobot',
      email: 'admin@autobot.vn',
      phone: '0901234567',
      passwordHash: adminPass,
      role: Role.ADMIN,
    },
  });

  const staff = await prisma.user.upsert({
    where: { email: 'staff@autobot.vn' },
    update: {},
    create: {
      name: 'Nhân Viên Kho Autobot',
      email: 'staff@autobot.vn',
      phone: '0909876543',
      passwordHash: staffPass,
      role: Role.STAFF,
    },
  });

  const customer = await prisma.user.upsert({
    where: { email: 'customer@autobot.vn' },
    update: {},
    create: {
      name: 'Khách Hàng Thân Thiết',
      email: 'customer@autobot.vn',
      phone: '0912345678',
      passwordHash: customerPass,
      role: Role.CUSTOMER,
    },
  });

  console.log(`Đã tạo người dùng: ${admin.email}, ${staff.email}, ${customer.email}`);

  // 2. Tạo Brands mẫu
  const brandsData = [
    { name: 'Bandai Namco', slug: 'bandai-namco', logoUrl: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65' },
    { name: 'Daban Model', slug: 'daban-model', logoUrl: null },
    { name: 'Motor Nuclear', slug: 'motor-nuclear', logoUrl: null },
    { name: 'In Era+', slug: 'in-era-plus', logoUrl: null },
    { name: 'SNAA', slug: 'snaa', logoUrl: null },
  ];

  for (const b of brandsData) {
    await prisma.brand.upsert({
      where: { slug: b.slug },
      update: {},
      create: b,
    });
  }
  console.log('Đã tạo các thương hiệu Gundam mẫu');

  // 3. Tạo Categories mẫu
  const categoriesData = [
    { name: 'Gunpla High Grade (HG 1/144)', slug: 'hg-high-grade' },
    { name: 'Gunpla Real Grade (RG 1/144)', slug: 'rg-real-grade' },
    { name: 'Gunpla Master Grade (MG 1/100)', slug: 'mg-master-grade' },
    { name: 'Gunpla Perfect Grade (PG 1/60)', slug: 'pg-perfect-grade' },
    { name: 'Super Deformed (SD / BB Senshi)', slug: 'sd-gundam' },
    { name: 'Mô hình Kim loại / Metal Build', slug: 'metal-build' },
  ];

  for (const c of categoriesData) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
  }
  console.log('Đã tạo các danh mục phân khúc Gunpla mẫu');

  // 4. Tạo Shipping Zones mẫu
  const existingZone = await prisma.shippingZone.findFirst();
  if (!existingZone) {
    await prisma.shippingZone.createMany({
      data: [
        {
          name: 'Nội thành TP.HCM (Giao hỏa tốc)',
          districts: 'Quận 1, Quận 3, Quận 5, Quận 10, Phú Nhuận, Bình Thạnh',
          fee: 25000,
          isLocal: true,
        },
        {
          name: 'Ngoại thành TP.HCM',
          districts: 'Quận 7, Quận 8, Quận 12, Bình Tân, Thủ Đức, Gò Vấp',
          fee: 35000,
          isLocal: true,
        },
        {
          name: 'Toàn quốc (Chuyển phát nhanh GHN/GHTK)',
          districts: 'Tất cả các tỉnh thành khác',
          fee: 45000,
          isLocal: false,
        },
      ],
    });
    console.log('Đã tạo các khu vực vận chuyển mẫu');
  }

  console.log('--- Khởi tạo dữ liệu mẫu hoàn tất! ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
