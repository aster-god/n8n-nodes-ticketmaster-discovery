import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { v2Description } from './resources/v-2';
import { defaultDescription } from './resources/default';

export class TicketmasterDiscovery implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ticketmaster-discovery',
		name: 'N8nDevTicketmasterDiscovery',
		icon: { light: 'file:./ticketmaster-discovery.svg', dark: 'file:./ticketmaster-discovery.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Ticketmaster Discovery API allows you to search for events, attractions, or venues',
		defaults: { name: 'ticketmaster-discovery' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevTicketmasterDiscoveryApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "V 2",
					"value": "V 2",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...v2Description,
		...defaultDescription
		],
	};
}
