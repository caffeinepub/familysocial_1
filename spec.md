# IndyaCentral

## Current State
- BusinessPage has tabs: My Businesses, Storefront, Tables, Orders, Branches, Payments, Delivery Setup, Commission, AI Marketing, POS Products
- AdminPanel WhatsApp API section has internal tabs: Credentials, Templates, Broadcast, OTP Config, Chatbot Script — but the Chatbot Script tab may not be visible due to tab overflow/rendering issues
- Evolution A4 Agent exists but chatbot script regeneration is not clearly triggering on module changes
- No business category-based module system in BusinessPage
- No Employee Management, Absence Management, or Payroll module

## Requested Changes (Diff)

### Add
- Business page: category-based module enablement system — modules available based on business type:
  - Inventory & Material Management
  - Assembly / Manufacturing
  - Repair & Service Management
  - Financial Management
  - Telecom Management
  - Retail Shop Management
  - Vehicle Sale & Purchase
  - Lead Generation / CRM
  - Software Project Management
  - Money Lending / Finance
- Employee Management module (add employees, roles, departments)
- Absence Management module (leave requests, approvals, attendance tracking)
- Payroll Management module (salary setup, payslips, deductions, disbursement)
- Fix WhatsApp chatbot Script tab visibility in Admin Panel
- Agent 4 (Evolution A4) auto-detects new modules/features and regenerates chatbot script with updated commands

### Modify
- WhatsApp API internal tabs: ensure Chatbot Script tab is always visible and scrollable
- Evolution A4 Agent: add module change detection + auto-regeneration of chatbot script
- BusinessPage: add a "Modules" tab to enable/disable modules per business based on category

### Remove
- Nothing removed

## Implementation Plan
1. Fix WhatsApp chatbot Script tab — ensure tablist wraps properly and chatbot tab is visible
2. Update Evolution A4 agent to monitor module list and auto-regenerate chatbot Node.js script with new commands
3. Add BusinessPage "Modules" tab: show module cards with enable/disable toggle; filter suggested modules by business category
4. Add Employee Management tab in BusinessPage: employee list, add employee form (name, role, department, salary, contact)
5. Add Absence Management tab: leave request form, approval queue, calendar view
6. Add Payroll Management tab: salary config per employee, generate payslip, disbursement log
