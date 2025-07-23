{
  "name": "Experience",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Job title or position"
    },
    "company": {
      "type": "string",
      "description": "Company or organization name"
    },
    "location": {
      "type": "string",
      "description": "Work location"
    },
    "start_date": {
      "type": "string",
      "format": "date",
      "description": "Start date"
    },
    "end_date": {
      "type": "string",
      "format": "date",
      "description": "End date (leave empty if current)"
    },
    "description": {
      "type": "string",
      "description": "Job description and responsibilities"
    },
    "skills": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Skills used in this role"
    },
    "current": {
      "type": "boolean",
      "default": false,
      "description": "Whether this is a current position"
    }
  },
  "required": [
    "title",
    "company",
    "start_date",
    "description"
  ]
}