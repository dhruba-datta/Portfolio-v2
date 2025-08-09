# Instagram Integration Setup

This portfolio includes Instagram integration to automatically display your latest photography posts on the homepage.

## Configuration

### Environment Variables

Create a `.env` file in the root directory and add the following Instagram API credentials:

```env
VITE_INSTAGRAM_USER_ID=your_instagram_user_id
VITE_INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
```

### Getting Instagram API Credentials

1. **Create a Facebook App**

   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app
   - Select "Consumer" as the app type

2. **Add Instagram Basic Display**

   - In your app dashboard, click "Add Product"
   - Add "Instagram Basic Display"

3. **Configure Instagram Basic Display**

   - Go to Instagram Basic Display > Basic Display
   - Create a new Instagram App
   - Add your website URL and privacy policy URL

4. **Generate Access Token**

   - Add your Instagram account as a test user
   - Generate a user access token
   - Copy the access token and your user ID

5. **Get User ID**
   - Use the access token to call: `https://graph.instagram.com/me?fields=id&access_token={your-access-token}`
   - This will return your Instagram User ID

### Features

- **Auto-refresh**: Posts are cached for 30 minutes and automatically refresh
- **Fallback content**: If API fails, displays placeholder content
- **Error handling**: Graceful degradation with retry functionality
- **Rate limiting**: Built-in caching to respect Instagram's API limits
- **Responsive design**: Optimized for all device sizes

### Deployment

When deploying to production (Netlify, Vercel, etc.), add the environment variables to your hosting platform:

**Netlify:**

- Site settings > Environment variables

**Vercel:**

- Project settings > Environment Variables

### Instagram Account Requirements

- The Instagram account must be a business or creator account
- The account must be linked to a Facebook page
- The app must be approved by Facebook for public use (for production)

### Troubleshooting

1. **No posts showing**: Check if environment variables are correctly set
2. **API errors**: Verify access token hasn't expired
3. **CORS issues**: Instagram API calls are made from server-side only
4. **Rate limits**: The app automatically handles rate limiting with caching

### Fallback Mode

If Instagram API is not configured or fails, the app will automatically display placeholder content using local images. This ensures the site works even without Instagram integration.
