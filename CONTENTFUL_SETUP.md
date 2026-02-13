# Contentful Setup Instructions

This guide will walk you through setting up Contentful for the Product Dashboard application.

## What is Contentful?

Contentful is a headless CMS (Content Management System) that stores your product data in the cloud. Your Angular app fetches this data via API.

## Step 1: Create a Contentful Account

1. Go to https://www.contentful.com
2. Click "Sign up for free"
3. Create an account with your email
4. Verify your email
5. Log in to your Contentful dashboard

## Step 2: Create a New Space

A "space" is like a project or database in Contentful.

1. In the Contentful dashboard, click "Create space"
2. Name it: `Product Dashboard` (or any name you prefer)
3. Select "Empty space"
4. Click "Create space"
5. Wait for the space to be created

## Step 3: Create a Content Type

A content type defines the structure of your products (like a database table schema).

1. In your space, go to **Content model** (left sidebar)
2. Click **Add content type**
3. Name it: `assesment` (exactly as shown - this is important!)
4. Click **Create**

## Step 4: Add Fields to the Content Type

Now add the fields that each product will have:

### Field 1: Title
1. Click **Add field**
2. Select **Text**
3. Name: `title`
4. Click **Create and configure**
5. Check "This field represents the Entry title"
6. Click **Save**

### Field 2: Description
1. Click **Add field**
2. Select **Rich text**
3. Name: `description`
4. Click **Create and configure**
5. Click **Save**

### Field 3: Price
1. Click **Add field**
2. Select **Number**
3. Name: `price`
4. Click **Create and configure**
5. Click **Save**

### Field 4: Category
1. Click **Add field**
2. Select **Text**
3. Name: `catogary` (note the spelling - it's intentional!)
4. Click **Create and configure**
5. Click **Save**

### Field 5: Image
1. Click **Add field**
2. Select **Media**
3. Name: `image`
4. Click **Create and configure**
5. Under "Validations", check "Specify file types"
6. Select image types (jpg, png, etc.)
7. Click **Save**

### Field 6: Featured
1. Click **Add field**
2. Select **Boolean**
3. Name: `featured`
4. Click **Create and configure**
5. Click **Save**

## Step 5: Get Your API Credentials

1. Go to **Settings** (left sidebar)
2. Click **API keys**
3. Click **Add API key**
4. Name it: `Product Dashboard`
5. Click **Create API key**

You'll see two important values:
- **Space ID** - Copy this
- **Content Delivery API access token** - Copy this

## Step 6: Add Credentials to Your App

1. Open `src/environments/environment.ts` in your project
2. Replace the placeholder values:

```typescript
export const environment = {
  production: false,
  contentful: {
    spaceId: 'YOUR_SPACE_ID_HERE',
    accessToken: 'YOUR_ACCESS_TOKEN_HERE'
  }
};
```

Replace:
- `YOUR_SPACE_ID_HERE` with your Space ID
- `YOUR_ACCESS_TOKEN_HERE` with your Content Delivery API access token

Example:
```typescript
export const environment = {
  production: false,
  contentful: {
    spaceId: '5wecr8clg4ko',
    accessToken: 'ZMi_pH0dfJwz0A9RmCvMU-g1kzYB0QTyenLotqADSxQ'
  }
};
```

## Step 7: Add Sample Products

Now let's add some products to test:

1. In your Contentful space, go to **Content** (left sidebar)
2. Click **Add entry**
3. Select **assesment**
4. Fill in the fields:

### Product 1: Laptop
- **Title**: Professional Laptop
- **Description**: High-performance laptop for developers
- **Price**: 1299
- **Category**: Electronics
- **Image**: Upload a laptop image
- **Featured**: Toggle ON

5. Click **Publish**

### Product 2: Mouse
- **Title**: Wireless Mouse
- **Description**: Ergonomic wireless mouse with precision tracking
- **Price**: 49
- **Category**: Accessories
- **Image**: Upload a mouse image
- **Featured**: Toggle OFF

6. Click **Publish**

### Product 3: Keyboard
- **Title**: Mechanical Keyboard
- **Description**: RGB mechanical keyboard with custom switches
- **Price**: 199
- **Category**: Accessories
- **Image**: Upload a keyboard image
- **Featured**: Toggle ON

7. Click **Publish**

Add more products as needed!

## Step 8: Test Your Setup

1. Start your Angular app:
```bash
npm start
```

2. Open http://localhost:4200 in your browser

3. You should see:
   - Featured products on the home page
   - All products on the products page
   - Product details when you click on a product

## Troubleshooting

### Products not showing?

**Check 1: Verify credentials**
- Go to Contentful Settings → API keys
- Copy your Space ID and Access Token again
- Make sure they're correct in `environment.ts`

**Check 2: Verify content type name**
- Go to Contentful Content model
- Make sure your content type is named exactly: `assesment`
- Check the spelling carefully!

**Check 3: Verify field names**
- Make sure all fields are named exactly:
  - `title`
  - `description`
  - `price`
  - `catogary` (with this spelling!)
  - `image`
  - `featured`

**Check 4: Check browser console**
- Open browser DevTools (F12)
- Go to Console tab
- Look for error messages
- Common errors:
  - "401 Unauthorized" = Wrong credentials
  - "404 Not Found" = Wrong space ID
  - "Content type not found" = Wrong content type name

**Check 5: Publish your entries**
- Go to Contentful Content
- Make sure all products show "Published" status
- Unpublished entries won't appear in the app

### API Key Issues

If you get "401 Unauthorized" errors:

1. Go to Contentful Settings → API keys
2. Delete the old key
3. Create a new one
4. Copy the new credentials
5. Update `environment.ts`
6. Restart your app

### Rate Limiting

Contentful has rate limits on free accounts. If you get rate limit errors:
- Wait a few minutes
- Try again
- Consider upgrading your Contentful plan

## Next Steps

Once everything is working:

1. Add more products to Contentful
2. Customize the styling in `src/app/shared/components/`
3. Add more features to the app
4. Deploy to production

## Useful Contentful Links

- **Contentful Dashboard**: https://app.contentful.com
- **Contentful Documentation**: https://www.contentful.com/developers/docs/
- **Content Delivery API**: https://www.contentful.com/developers/docs/references/content-delivery-api/

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify all credentials are correct
3. Make sure content type and field names match exactly
4. Check that entries are published
5. Try clearing browser cache and restarting the app

---

Happy content managing!
