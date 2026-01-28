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
    "CollabData": {
        "conversationId": "chat-101",
        "messages": [
            {
                "id": "msg001",
                "collbInstanceName": "Boiler System Monthly operational data Chat",
                "senderId": "userA",
                "senderName": "Rahul setty",
                "message": "Hi everyone, are we ready for the demo?",
                "timestamp": "2026-01 - 28T10:00:00Z",
                "type": "text"
            },
            {
                "id": "msg001",
                "collbInstanceName": "Boiler System Monthly operational data Chat",
                "senderId": "userAdmin",
                "senderName": "tata manager",
                "message": "Okay, let's proceed with the system analysis.",
                "timestamp": "2026-01 - 28T10:00:00Z",
                "type": "text"
            },
            {
                "id": "msg002",
                "collbInstanceName": "Boiler System maintenance analysis Chat",
                "senderId": "userB",
                "senderName": "will jackson",
                "message": "Yes, I just uploaded the new API specs.",
                "timestamp": "2026-01-28T10:01:00Z",
                "type": "file",
                "fileUrl": "/files/specs.pdf"
            }
        ]
    },
    "input_schema": { "type": "object", "properties": { "temp": { "type": "number" } } },
    "output_schema": { "type": "object", "properties": { "efficiency": { "type": "number" } } },
    "subSystems": {
        "totalSubsystem": 3,
        "subSystemlist": [
            {
                "id": "node1",
                "name": "input-subsystem",
                "type": "input",
            },
            {
                "id": "node2",
                "name": "subsystem-2",
                "type": "ALmodel",
            },
            {
                "id": "node3",
                "name": "Output-log",
                "type": "Output",
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





