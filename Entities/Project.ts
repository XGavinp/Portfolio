{
  "name": "Project",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Project title"
    },
    "description": {
      "type": "string",
      "description": "Project description"
    },
    "technologies": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Technologies used"
    },
    "github_url": {
      "type": "string",
      "description": "GitHub repository URL"
    },
    "live_url": {
      "type": "string",
      "description": "Live demo URL"
    },
    "image_url": {
      "type": "string",
      "description": "Project screenshot URL"
    },
    "featured": {
      "type": "boolean",
      "default": false,
      "description": "Whether this project is featured"
    }
  },
  "required": [
    "title",
    "description"
  ]
}