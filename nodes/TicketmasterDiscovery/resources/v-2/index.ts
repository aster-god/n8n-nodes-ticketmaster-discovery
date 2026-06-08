import type { INodeProperties } from 'n8n-workflow';

export const v2Description: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					]
				}
			},
			"options": [
				{
					"name": "GET Discovery V 2 Suggest",
					"value": "GET Discovery V 2 Suggest",
					"action": "Find Suggest",
					"description": "Find search suggestions and filter your suggestions by location, source, etc.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/suggest"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /discovery/v2/suggest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Keyword",
			"name": "keyword",
			"description": "Keyword to search on",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "keyword",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"description": "Filter entities by its source name",
			"default": "",
			"type": "options",
			"options": [
				{
					"name": "Ticketmaster",
					"value": "ticketmaster"
				},
				{
					"name": "Universe",
					"value": " universe"
				},
				{
					"name": "Frontgate",
					"value": " frontgate"
				},
				{
					"name": "Tmr",
					"value": " tmr"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "source",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Latlong",
			"name": "latlong",
			"description": "Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead",
			"default": "33.80003000,-117.88304300",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "latlong",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Radius",
			"name": "radius",
			"description": "Radius of the area in which we want to search for events.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "radius",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Unit",
			"name": "unit",
			"description": "Unit of the radius",
			"default": "",
			"type": "options",
			"options": [
				{
					"name": "Miles",
					"value": "miles"
				},
				{
					"name": "Km",
					"value": "km"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "unit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Size of every entity returned in the response",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Include Fuzzy",
			"name": "includeFuzzy",
			"description": "yes, to include fuzzy matches in the search. This has performance impact.",
			"default": "",
			"type": "options",
			"options": [
				{
					"name": "Yes",
					"value": "yes"
				},
				{
					"name": "No",
					"value": " no"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "includeFuzzy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Client Visibility",
			"name": "clientVisibility",
			"description": "Filter events to clientName",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientVisibility",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"description": "Filter suggestions by country code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "countryCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Include TBA",
			"name": "includeTBA",
			"description": "True, to include events with date to be announce (TBA)",
			"default": "",
			"type": "options",
			"options": [
				{
					"name": "Yes",
					"value": "yes"
				},
				{
					"name": "No",
					"value": " no"
				},
				{
					"name": "Only",
					"value": " only"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "includeTBA",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Include TBD",
			"name": "includeTBD",
			"description": "True, to include event with a date to be defined (TBD)",
			"default": "",
			"type": "options",
			"options": [
				{
					"name": "Yes",
					"value": "yes"
				},
				{
					"name": "No",
					"value": " no"
				},
				{
					"name": "Only",
					"value": " only"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "includeTBD",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Segment Id",
			"name": "segmentId",
			"description": "Filter suggestions by segment id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "segmentId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Geo Point",
			"name": "geoPoint",
			"description": "filter events by geoHash",
			"default": "dr5rh",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "geoPoint",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
			"default": "en-us,en,fr",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "locale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Include Licensed Content",
			"name": "includeLicensedContent",
			"description": "Yes if you want to display licensed content",
			"default": "",
			"type": "options",
			"options": [
				{
					"name": "Yes",
					"value": "yes"
				},
				{
					"name": "No",
					"value": " no"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "includeLicensedContent",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
		{
			"displayName": "Include Spellcheck",
			"name": "includeSpellcheck",
			"description": "yes, to include spell check suggestions in the response.",
			"default": "",
			"type": "options",
			"options": [
				{
					"name": "Yes",
					"value": "yes"
				},
				{
					"name": "No",
					"value": " no"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "includeSpellcheck",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"V 2"
					],
					"operation": [
						"GET Discovery V 2 Suggest"
					]
				}
			}
		},
];
