{
  "name": "Publication",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Publication title"
    },
    "authors": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of authors"
    },
    "publication": {
      "type": "string",
      "description": "Journal, conference, or publication venue"
    },
    "publication_date": {
      "type": "string",
      "format": "date",
      "description": "Publication date"
    },
    "abstract": {
      "type": "string",
      "description": "Publication abstract or summary"
    },
    "url": {
      "type": "string",
      "description": "Link to the publication"
    },
    "doi": {
      "type": "string",
      "description": "Digital Object Identifier"
    },
    "status": {
      "type": "string",
      "enum": [
        "published",
        "accepted",
        "under_review",
        "in_preparation"
      ],
      "default": "published",
      "description": "Publication status"
    }
  },
  "required": [
    "title",
    "authors",
    "publication"
  ]
}