# Quick Start Guide

## ✅ Your Contentful Credentials Are Configured!

Your environment is now set up with:
- **Space ID**: `5wecr8clg4ko`
- **Access Token**: `vuH7AYhqTkkaPLidinHDVOe6jhxj8d1js3FPAl7E84s4`

---

## 🚀 Run the Application

Open a terminal in the `product-dashboard` folder and run:

```bash
npm start
```

Or:

```bash
ng serve
```

Then open your browser to: **http://localhost:4200**

---

## ✅ What You Should See

### If Everything Works:
1. **Hero Section** at the top with your Contentful content
2. **Featured Products** grid below
3. Beautiful, responsive design

### If You See Errors:

#### "No hero section found"
**Fix**: In Contentful, create a "Hero Section" entry and publish it

#### No products showing
**Fix**: 
1. Create Product entries in Contentful
2. Set some products with `featured: true`
3. Make sure all content is **Published** (not just saved)

#### Images not loading
**Fix**: Upload images to Contentful and publish them

---

## 📋 Contentful Content Model Checklist

Make sure in Contentful you have:

### Content Models Created:

#### 1. Product (content type ID: `product`)
Fields:
- `title` (Text - Short text)
- `description` (Text - Long text)
- `price` (Number - Decimal)
- `category` (Text - Short text)
- `image` (Media - Single file)
- `featured` (Boolean)

#### 2. Hero Section (content type ID: `heroSection`)
Fields:
- `title` (Text - Short text)
- `description` (Text - Long text)
- `image` (Media - Single file)
- `ctaText` (Text - Short text - optional)
- `ctaLink` (Text - Short text - optional)

### Content Entries Created:

- ✅ At least 1 Hero Section entry (published)
- ✅ At least 3-5 Product entries with `featured: true` (published)
- ✅ At least 3-5 more Product entries (published)

---

## 🔧 Troubleshooting

### Check Content Type IDs
In Contentful, go to Content model → Click on your model → Check the "Content type ID" at the top.

It should be:
- `product` (lowercase, no spaces)
- `heroSection` (camelCase, no spaces)

If they're different, update them in Contentful or update the service code.

### Check Field IDs
Click on each field in your content model and verify the "Field ID" matches:
- `title`, `description`, `price`, `category`, `image`, `featured`

### Verify Content is Published
In Contentful Content tab:
- Look for green "Published" badge
- If it says "Draft" or "Changed", click "Publish"

---

## 🎯 Next Steps After Home Page Works

Once you see the home page working, we can implement:

1. **Product Listing Page** - Show all products
2. **Product Detail Page** - Individual product view
3. **Favorites/Cart** - Add/remove products
4. **Filtering** - By category
5. **Pagination** - For product list

---

## 📚 Useful Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Check for TypeScript errors
ng build --configuration development

# Generate new component
ng generate component path/component-name
```

---

## 🎉 You're All Set!

Your Contentful credentials are configured. Just run `npm start` and you should see your content-driven product dashboard!

**Need help?** Check:
- SETUP_GUIDE.md for detailed instructions
- ANGULAR_CLI_COMMANDS.md for Angular CLI usage
- README.md for project overview
