Technologies Used:
Next.js (App Router) 
TypeScript for type-safe development.
Supabase as the database for storing and fetching data.
Tailwind CSS for styling 

Setup Instructions:
To set up and run the project locally, follow these steps:
npm install

Start the development server:
npm run dev

Features:
Sidebar Navigation:
Displays a list of groups.
Clicking on a group toggles the side panel with group details.
Clicking the same group again closes the side panel.

Database Schema:
Column Name:	    Data Type	       
id:	            UUID	            
group_name:	    VARCHAR	            
project:	        VARCHAR	            
labels:	        TEXT[]	            
members:	        INT8	            
last_active:	    TIMESTAMPZ	        
