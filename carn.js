//the transition conditions 
event.preview().toUpperCase().includes("spooky")   ||  event.preview().toUpperCase().includes("magic") ||  event.preview().toUpperCase().includes("dragon")

// the list language module  condition
const userName = workflow.userName || 'valued customer'; 


let responsePrefix = '';
if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
    responsePrefix = `Greetings, ${userName}! `;
} else if (userMessage.toLowerCase().includes('problem') || userMessage.toLowerCase().includes('issue')) {
    responsePrefix = `I understand you're experiencing an issue, ${userName}. `;
} else {
    responsePrefix = `Thank you for your message, ${userName}. `;
}


temp.dynamicResponsePart = responsePrefix + 'I am processing your request now.';


bp.logger.info(`User input received in AutonomousNode: "${userMessage}"`);
bp.logger.info(`Generated dynamic response part: "${temp.dynamicResponsePart}"`);
  
//CHAT BOT PG LINK :https://sites.google.com/view/hords-palace/home