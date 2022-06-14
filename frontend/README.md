# Frontend app

## Start development 
```
npm i
npm run dev
```

## Build for production
```
npm i
npm build
```

---

# Documentation for components
- the components are stored in the `src/components` directory
- used data types are in `/src/types`

## AboutCard
- basic information about the application
- contact information
- FAQ

## Booking
- the main component is implemented in `BookingCard`
  - basic information about the performance
  - logic for setting tickets as booked via the `reservedAt` attribute
  - child components for particular booking phases
- `BookingTickets` holds a summary of chosen seats
- `SeatsGrid` takes care of rendering the grid with seats
  - the grid adapted to the layout of the venue (rows and columns)
- `BookingConfirmation` renders when booking is successful

## Error
- component for basic error notifications

## Footer
- component for the page footer

## Header
- `Header` component holds header tabs and user menu
- `UserMenu` has two variants
  - for an unlogged user, it shows the possibility for login or creation of a new account
  - for a logged user, it shows navigation to the user profile and sign-out possibility

## HomeCard
- `HomeCard` is a component for the main homepage container holding all plays from the database
- plays are rendered as `PlayItem` components with basic play info and link

## Loading
- auxiliary component used when waiting for data from the backend

## NewAccount
- account creation has two phases handled in `new account`
- `CreateAccountCard` holds form with basic input validation and database registration
  - the component also handles errors from the backend
- `AccountCreatedCard` pops out when registration is successful, and an account is created

## OrderPlacement
- `OrderPlacement` component takes care of creating orders from booked tickets
- the first phase is `CartCard`
  - the user can list all booked tickets and see the remaining time
  - the user can remove tickets one at a time or can remove them all
- `UserForm` serves as a form for user data for order
- the last phase is summary in `SummaryCard`
- if, by chance, the time of booked tickets expires, the user cannot continue ordering, and an error message pops out

## PlayCard
- `PlayCard` component shows information about the play and a list of performances in the future
- performances are shown via `PerformanceItem`
  - it contains a link to the booking page for a particular performance

## Profile
- main profile component is `Profile`
  - it shows user personal information and enables editing of account information via `EditProfile`
  - it enables deleting an account via `DeleteAccount`
  - it shows all purchased tickets for future performances via the `PurchasedTicket` component
  - it holds a link to a component that enables managing tickets for future performances

## ProgramCard
- `ProgramCard` holds a list of future performances 
  - it filters out the relevant list of performances and passes it to `Performances`
  - performances can be filtered according to the date
  - performances can be searched by their name
- `Performances` renders performances via `LongPerformanceItem` component

## RequireAuth
- TODO

## ReturnTickets
- returning of tickets handled by `ReturnTickets` component
- returning has 3 phases:
  1.  choose tickets that are purchase and are in the future via `ChooseTicketsCard`
  2.  confirm chosen tickets via `ConfirmTicketsCard`
  3.  see confirmation of returning `ReturnTicketsConfirmation`

## SignIn
- `SignIn` component has a basic form for users signing in
  - if the operations are not successful, an error notification pops out
  - otherwise, the user is navigated to the targeted page

