# Dating Resume — [Name]

A personal dating resume website with an Arabian Nights / bellydance aesthetic.

## Project Structure

```
dating-resume/
├── index.html          ← main page (edit this with real content)
├── css/
│   └── style.css       ← all styles (jewel tones + gold palette)
├── js/
│   └── shimmer.js      ← ambient particle background animation
├── images/             ← put your photos here
│   └── (add photos)
└── README.md
```

## How to Customize

### 1. Replace placeholder text in `index.html`
Search for anything in `[brackets]` and fill it in:
- `[Your Name Here]` — hero title
- `[Name]` — page title tag
- `[X]` years of dance — in the interests section
- All the fun facts, red/green flags — make them yours!

### 2. Add your photos

**Profile photo** (About section):
- Add your image to the `images/` folder (e.g. `images/profile.jpg`)
- In `index.html`, find the `about-photo-placeholder` div and replace the inner div with:
  ```html
  <img src="images/profile.jpg" alt="[Your Name]" />
  ```

**Gallery photos:**
- Add photos to `images/` folder
- Find the `.gallery-grid` section and replace each `.gallery-stub` div with:
  ```html
  <img src="images/photo1.jpg" alt="Brief description" />
  ```

### 3. Update social links
In the Contact section, update the `href` values for email, Instagram, and any other links. Remove or add `.social-link` items as needed.

### 4. Change the page title/tab name
At the top of `index.html`, update:
```html
<title>The One & Only — [Name]'s Dating Resume</title>
```

---

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `my-dating-resume` — keep it private if you prefer!)
2. Push all these files to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
3. Go to your repo on GitHub → **Settings** → **Pages**
4. Under "Source", select **Deploy from a branch** → **main** → **/ (root)**
5. Click Save — your site will be live at `https://yourusername.github.io/your-repo-name/` within a minute or two!

### Custom Domain (optional)
If you have a domain name, you can set it in GitHub Pages settings and add a `CNAME` file to the repo root with just your domain on one line.

---

## Color Palette (for reference)
| Name       | Hex       | Used for                     |
|------------|-----------|------------------------------|
| Night      | `#0D0A1A` | Background                   |
| Gold       | `#C9922A` | Primary accent, headers      |
| Gold Light | `#E8B84B` | Hover states, gradients      |
| Parchment  | `#F5E6C8` | Body text                    |
| Purple     | `#7B2D8B` | Fun facts column, gradients  |
| Teal       | `#1A5F7A` | Gradient accents             |
| Ruby       | `#A0291E` | Red flag column, accents     |

## Fonts (Google Fonts)
- **Cinzel Decorative** — section titles, display
- **Dancing Script** — accent/tagline
- **Lato** — body text
