module.exports = {
  "title": "Brett Bender",
  "name": "brett_bender",
  "baseUrl": "https://status.brettb.xyz",
  "description": "The Brett Bender status page",
  "defaultLocale": "en",
  "head": {
    "script": [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      { src: "/js/netlifyRedirect.js" }
    ]
  },
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],
  "content": {
    "frontMatterFormat": "yaml",
    "systems": [
        "web", "discord"
    ]
  }
}