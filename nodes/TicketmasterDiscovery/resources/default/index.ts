import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Find",
					"value": "Find",
					"action": "Attraction Search",
					"description": "Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/attractions"
						}
					}
				},
				{
					"name": "Get",
					"value": "Get",
					"action": "Get Attraction Details",
					"description": "Get details for a specific attraction using the unique identifier for the attraction.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/attractions/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Discovery V 2 Classifications",
					"value": "GET Discovery V 2 Classifications",
					"action": "Classification Search",
					"description": "Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/classifications"
						}
					}
				},
				{
					"name": "Get Genre",
					"value": "Get Genre",
					"action": "Get Genre Details",
					"description": "Get details for a specific genre using its unique identifier.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/classifications/genres/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Segment",
					"value": "Get Segment",
					"action": "Get Segment Details",
					"description": "Get details for a specific segment using its unique identifier.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/classifications/segments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Subgenre",
					"value": "Get Subgenre",
					"action": "Get Sub-Genre Details",
					"description": "Get details for a specific sub-genre using its unique identifier.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/classifications/subgenres/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Discovery V 2 Events",
					"value": "GET Discovery V 2 Events",
					"action": "Event Search",
					"description": "Find events and filter your search by location, date, availability, and much more.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/events"
						}
					}
				},
				{
					"name": "Get Images",
					"value": "Get Images",
					"action": "Get Event Images",
					"description": "Get images for a specific event using the unique identifier for the event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/events/{{$parameter[\"id\"]}}/images"
						}
					}
				},
				{
					"name": "GET Discovery V 2 Venues",
					"value": "GET Discovery V 2 Venues",
					"action": "Venue Search",
					"description": "Find venues and filter your search by name, and much more.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/v2/venues"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /discovery/v2/attractions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting order of the search result. Allowable Values : 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "Classification Name",
			"name": "classificationName",
			"description": "Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type",
			"default": "",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "classificationName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "Classification Id",
			"name": "classificationId",
			"description": "Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type",
			"default": "",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "classificationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find"
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
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "Filter entities by its id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find"
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
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "Include Test",
			"name": "includeTest",
			"description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
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
					"property": "includeTest",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Page size of the response",
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
						"Default"
					],
					"operation": [
						"Find"
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
						"Default"
					],
					"operation": [
						"Find"
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
						"Default"
					],
					"operation": [
						"Find"
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
						"Default"
					],
					"operation": [
						"Find"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/attractions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the attraction",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get"
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
						"Default"
					],
					"operation": [
						"Get"
					]
				}
			}
		},
		{
			"displayName": "Include Licensed Content",
			"name": "includeLicensedContent",
			"description": "True if you want to display licensed content",
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
						"Default"
					],
					"operation": [
						"Get"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/classifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting order of the search result",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "Filter entities by its id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
					]
				}
			}
		},
		{
			"displayName": "Include Test",
			"name": "includeTest",
			"description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
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
					"property": "includeTest",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Page size of the response",
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Classifications"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/classifications/genres/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Genre"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the genre",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Genre"
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
						"Default"
					],
					"operation": [
						"Get Genre"
					]
				}
			}
		},
		{
			"displayName": "Include Licensed Content",
			"name": "includeLicensedContent",
			"description": "True if you want to display licensed content",
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
						"Default"
					],
					"operation": [
						"Get Genre"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/classifications/segments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Segment"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the segment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Segment"
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
						"Default"
					],
					"operation": [
						"Get Segment"
					]
				}
			}
		},
		{
			"displayName": "Include Licensed Content",
			"name": "includeLicensedContent",
			"description": "True if you want to display licensed content",
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
						"Default"
					],
					"operation": [
						"Get Segment"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/classifications/subgenres/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Subgenre"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the subgenre",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Subgenre"
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
						"Default"
					],
					"operation": [
						"Get Subgenre"
					]
				}
			}
		},
		{
			"displayName": "Include Licensed Content",
			"name": "includeLicensedContent",
			"description": "True if you want to display licensed content",
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
						"Default"
					],
					"operation": [
						"Get Subgenre"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc','onsaleStartDate,asc', 'id,asc'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"description": "Filter events with a start date after this date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"description": "Filter events with a start date before this date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Onsale Start Date Time",
			"name": "onsaleStartDateTime",
			"description": "Filter events with onsale start date after this date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "onsaleStartDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Onsale On Start Date",
			"name": "onsaleOnStartDate",
			"description": "Filter events with onsale start date on this date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "onsaleOnStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Onsale On After Start Date",
			"name": "onsaleOnAfterStartDate",
			"description": "Filter events with onsale range within this date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "onsaleOnAfterStartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Onsale End Date Time",
			"name": "onsaleEndDateTime",
			"description": "Filter events with onsale end date before this date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "onsaleEndDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"description": "Filter events by city",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"description": "Filter events by country code",
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "State Code",
			"name": "stateCode",
			"description": "Filter events by state code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "stateCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"description": "Filter events by postal code / zipcode",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "postalCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Venue Id",
			"name": "venueId",
			"description": "Filter events by venue id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "venueId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Attraction Id",
			"name": "attractionId",
			"description": "Filter events by attraction id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "attractionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Segment Id",
			"name": "segmentId",
			"description": "Filter events by segment id",
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Segment Name",
			"name": "segmentName",
			"description": "Filter events by segment name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "segmentName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Classification Name",
			"name": "classificationName",
			"description": "Filter events by classification name: name of any segment, genre, sub-genre, type, sub-type",
			"default": "",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "classificationName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Classification Id",
			"name": "classificationId",
			"description": "Filter events by classification id: id of any segment, genre, sub-genre, type, sub-type",
			"default": "",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "classificationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Market Id",
			"name": "marketId",
			"description": "Filter events by market id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "marketId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Promoter Id",
			"name": "promoterId",
			"description": "Filter events by promoter id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "promoterId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Dma Id",
			"name": "dmaId",
			"description": "Filter events by dma id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dmaId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Client Visibility",
			"name": "clientVisibility",
			"description": "Filter events by clientName",
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "Filter entities by its id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Include Test",
			"name": "includeTest",
			"description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
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
					"property": "includeTest",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Page size of the response",
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Events"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/events/{id}/images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Images"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the event",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Images"
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
						"Default"
					],
					"operation": [
						"Get Images"
					]
				}
			}
		},
		{
			"displayName": "Include Licensed Content",
			"name": "includeLicensedContent",
			"description": "True if you want to display licensed content",
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
						"Default"
					],
					"operation": [
						"Get Images"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/v2/venues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'distance,desc'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
		{
			"displayName": "State Code",
			"name": "stateCode",
			"description": "Filter venues by state / province code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "stateCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"description": "Filter venues by country code",
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "Filter entities by its id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
		{
			"displayName": "Include Test",
			"name": "includeTest",
			"description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
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
					"property": "includeTest",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Page size of the response",
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
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
						"Default"
					],
					"operation": [
						"GET Discovery V 2 Venues"
					]
				}
			}
		},
];
