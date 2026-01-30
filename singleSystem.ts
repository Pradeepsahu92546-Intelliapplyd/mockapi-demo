// single System full demo json  for testing


// A single system represents an industrial-system setup, 
// such as a boiler system, 
// with various attributes including 
//  identification details, status, activity logs, collaboration data, 
//  input/output schemas, subsystems, analyses, reports, and uploaded files.
 
const singleSystem = {
    "id": "101",
    "name": "Boiler-A1",
    "unitId": "unit-123",
    "description": "Industrial boiler",
    "baseSystemStatus": true,
    "creatorId": "user-456",
    "creatorName" : "Admin User",
    "createdAt": "2026-01-14T10:00:00Z",
    "updatedAt": "2026-01-14T10:00:00Z",
    "activityLog": [
        {
            "timestamp": "2026-01-14T10:00:00Z",
            "userId": "user-456",
            "action": "Created the boiler system."
        },
        {
            "timestamp": "2026-01-15T12:30:00Z",
            "userId": "user-789",
            "action": "Updated system description."
        },
        {
            "timestamp": "2026-01-16T09:15:00Z",
            "userId": "user-456",
            "action": "Changed system status to active."
        }
    ],
    "configuration": {
        "pressureSetting": "150psi",
        "temperatureThreshold": "200C",
        "safetyValve": "enabled"
    },
   "collabData": {
    "groupChats": [
      {
        "conversationId": "group-chat-101",
        "collbInstanceName": "Boiler System Monthly Operational Data",
        "chatType": "GROUP",
        "participants": [
          { "userId": "userA", "name": "Rahul Setty" },
          { "userId": "userB", "name": "Will Jackson" },
          { "userId": "userAdmin", "name": "Tata Manager" }
        ],
        "messages": [
          {
            "id": "msg001",
            "senderId": "userA",
            "senderName": "Rahul Setty",
            "message": "Hi everyone, are we ready for the demo?",
            "timestamp": "2026-01-28T10:00:00Z",
            "type": "text"
          },
          {
            "id": "msg002",
            "senderId": "userAdmin",
            "senderName": "Tata Manager",
            "message": "Okay, let's proceed with the system analysis.",
            "timestamp": "2026-01-28T10:00:30Z",
            "type": "text"
          },
          {
            "id": "msg003",
            "senderId": "userB",
            "senderName": "Will Jackson",
            "message": "I’ve uploaded the new API specs.",
            "timestamp": "2026-01-28T10:01:00Z",
            "type": "file",
            "fileUrl": "/files/specs.pdf"
          }
        ]
      }
    ],
    "privateChats": [
      {
        "conversationId": "private-chat-201",
        "chatType": "PRIVATE",
        "participants": [
          { "userId": "userA", "name": "Rahul Setty" },
          { "userId": "userAdmin", "name": "Tata Manager" }
        ],
        "messages": [
          {
            "id": "pmsg001",
            "senderId": "userAdmin",
            "senderName": "Tata Manager",
            "message": "Rahul, please focus on the performance metrics during the demo.",
            "timestamp": "2026-01-28T09:55:00Z",
            "type": "text"
          },
          {
            "id": "pmsg002",
            "senderId": "userA",
            "senderName": "Rahul Setty",
            "message": "Sure, I’ll cover efficiency and downtime details.",
            "timestamp": "2026-01-28T09:56:00Z",
            "type": "text"
          }
        ]
      },

      {
        "conversationId": "private-chat-202",
        "chatType": "PRIVATE",
        "participants": [
          { "userId": "userB", "name": "Will Jackson" },
          { "userId": "userA", "name": "Rahul Setty" }
        ],
        "messages": [
          {
            "id": "pmsg003",
            "senderId": "userB",
            "senderName": "Will Jackson",
            "message": "Did you check the API error handling part?",
            "timestamp": "2026-01-28T09:50:00Z",
            "type": "text"
          },
          {
            "id": "pmsg004",
            "senderId": "userA",
            "senderName": "Rahul Setty",
            "message": "Yes, looks good. Just minor validation updates needed.",
            "timestamp": "2026-01-28T09:51:00Z",
            "type": "text"
          }
        ]
      }
    ]
  },
    "input_schema": { "type": "object", "properties": { "temp": { "type": "number" } } },
    "output_schema": { "type": "object", "properties": { "efficiency": { "type": "number" } } },
    "subSystem-noded-data": {
        "totalSubsystem": 3,
        "subSystemlist": [
            {
                "id": "node1",
                "name": "input-subsystem",
                "type": "input",
                "config": {
                    "schema": {
                        "type": "PROTOCOL",
                    },
                    "properties": {
                            "procotol-1": "api",
                            "protocol-2": "manual"
                    }
                }
            },
            {
                "id": "node2",
                "name": "subsystem-2",
                "type": "ALmodel",
                "config": {
                    "modelType": "Neural Network",
                    "parameters": {
                        "layers": 4,
                        "activation": "ReLU"
                    }
                }
            },
            {
                "id": "node3",
                "name": "Output-log",
                "type": "Output",
                "config": {
                    "destination": "database",
                    "format": "JSON"
                }
            }
        ],
         "Relation": [
        {
            "id": "link1",
            "source": "node1",
            "target": "node2",
            "type": "connects_to",
        },
        {
            "id": "link2",
            "source": "node2",
            "target": "node3",
            "type": "connects_to",
        }
        ]
    },
    "avaliableAnalysisForSystem" : [
        {
            "analysisId": "anl-001",
            "name": "Efficiency Analysis",
            "description": "Analyzes the efficiency of the boiler system.",
            "createdAt": "2026-01-10T09:00:00Z",
            "updatedAt": "2026-01-12T11:00:00Z"
        },
        {
            "analysisId": "anl-002",
            "name": "Safety Compliance Check",
            "description": "Checks if the boiler system meets safety standards.",
            "createdAt": "2026-01-11T10:30:00Z",
            "updatedAt": "2026-01-13T12:15:00Z"
        },
        {
            "analysisId": "anl-003",
            "name": "Performance Benchmarking",
            "description": "Benchmarks the performance against industry standards.",
            "createdAt": "2026-01-12T14:00:00Z",
            "updatedAt": "2026-01-14T16:00:00Z"
        }
    ],
    "generatedAnalysisReport" : [
        {
            "reportId": "rep-001",
            "analysisId": "anl-001",
            "currentStatus": "completed",
            "currentProgress": "100%",
            "generatedAt": "2026-01-15T10:00:00Z",
            "reportUrl": "/reports/rep-001.pdf"
        },
        {
            "reportId": "rep-002",
            "analysisId": "anl-002",
            "currentStatus": "pending",
            "currentProgress": "75%",
            "generatedAt": "2026-01-16T11:30:00Z",
            "reportUrl": "/"
        },
        {
            "reportId" : "rep-004",
            "analysisId": "anl-003",
            "currentStatus": "failed",
            "currentProgress": "0%",
            "generatedAt": "2026-01-17T14:45:00Z",
            "reportUrl": "/errorts/rep-003.pdf"
        }
    ],
    "fileUploadAgaistSystem": [
        {
            "fileId": "file-001",
            "fileName": "system-performance-sixmonth-data.xlsx",
            "uploadedAt": "2026-01-14T11:00:00Z",
            "fileUrl": "/files/system-performance-sixmonth-data.xlsx"
        },
        {
            "fileId": "file-002",
            "fileName": "maintenance-monthly-data.csv",
            "uploadedAt": "2026-01-15T13:30:00Z",
            "fileUrl": "/files/maintenance-monthly-data.csv"
        }
    ]
}





