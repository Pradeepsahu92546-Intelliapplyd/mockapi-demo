// single unit full demo json  for testing
const singleUnit = {
    "id" : "unit-123",
    "name": "Tata Unit",
    "description" : "This is a demo unit for Tata industries",
    "creatorId" : "user-001",
    "creatorName" : "Unit Admin",
    "dom_email" : "unitAdmin@tata.com",
    "is_individual": null,
    "createdAt" : "2026-01-10T09:00:00Z",
    "updatedAt" : "2026-01-12T11:00:00Z",
    "systems" : [
        {
            "id": "101",
            "name": "Boiler-A1",
            "description": "Industrial boiler",
            "status" : "active",
            "baseSystemStatus": true,
            "createdAt": "2026-01-14T10:00:00Z",
            "updatedAt": "2026-01-14T10:00:00Z"
        },
        {
            "id": "102",
            "name": "Conveyor-B2",
            "description": "Material conveyor belt",
            "status" : "inactive",
            "baseSystemStatus": true,
            "createdAt": "2026-01-15T11:30:00Z",
            "updatedAt": "2026-01-16T14:45:00Z"
        }
    ],
    "teams": [
           {
               "id": "d210046b-458e-432e-ae5e-3538e05a173f",
               "name": "exuctive team",
               "org": "test-org",
               "cret_at": "2025-06-18T09:19:25.525473Z",
               "descrpt": "exuctive team for unit",
               "members": [
                {
                      "userId": "user-004",
                      "userName": "Unit Admin",
                      "description": "Admin of the unit",
                      "status": "active",
                      "email": "unitAdmin@tata.com",
                      "createdAt": "2026-01-10T09:00:00Z"
                },
                {
                      "userId": "user-001",
                      "userName": "Unit Member",
                      "description": "Member of the unit",
                      "status": "active",
                      "email": "unitMember@tata.com",
                      "createdAt": "2026-01-10T09:00:00Z"
                }
               ],

           },
           {
               "id": "d4f0dfa8-6c46-445b-b8b7-d4927159e4bb",
               "name": "monitoring team",
               "org": "test-org",
               "cret_at": "2025-06-23T12:11:16.515791Z",
               "descrpt": "monitoring team for unit",
               "members": [
                  {
                      "userId": "user-004",
                      "userName": "Unit Admin",
                      "description": "Admin of the unit",
                      "status": "active",
                      "email": "unitAdmin@tata.com",
                      "createdAt": "2026-01-10T09:00:00Z"
                 },
                {
                      "userId": "user-002",
                      "userName": "Unit Member",
                      "description": "Member of the unit",
                      "status": "active",
                      "email": "unitMember2@tata.com",
                      "createdAt": "2026-01-10T09:00:00Z"
                }
               ],
           }
    ],
    "members": [
        {
            "userId": "user-004",
            "userName": "Unit Admin",
            "description": "Admin of the unit",
            "status": "active",
            "email": "unitAdmin@tata.com",
            "createdAt": "2026-01-10T09:00:00Z"
        },
        {
            "userId": "user-001",
            "userName": "Unit Member",
            "description": "Member of the unit",
            "status": "active",
            "email": "unitMember@tata.com",
            "createdAt": "2026-01-10T09:00:00Z"
        },
        {
            "userId": "user-002",
            "userName": "Unit Member 2",
            "description": "Member of the unit",
            "status": "active",
            "email": "unitMember2@tata.com",
            "createdAt": "2026-01-10T09:00:00Z",
        },
        {
            "userId": "user-003",
            "userName": "Unit Member 3",
            "description": "Member of the unit",
            "status": "active",
            "email": "unitMember3@tata.com",
            "createdAt": "2026-01-10T09:00:00Z",
        }
    ],
    "roles": [],
    "activityLog": [
        {
            "timestamp": "2026-01-10T09:00:00Z",
            "userId": "user-001",
            "action": "Created the unit."
        },
        {
            "timestamp": "2026-01-12T11:00:00Z",
            "userId": "user-002",
            "action": "Updated unit description."
        }
    ],
    
}