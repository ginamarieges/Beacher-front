## Data

Beaches

- name
- image
- region
- town
- services
- description
- addServices

user: Slice
UI State modals, loadings
current page

## Actions

- addBeach()
- removeBeach()
- updateBeach()
- getBeaches()
- filterBeaches() para filtrar por comarca
- loginUser()
- logoutUser()
- showSpinner()
- hideSpinner()
- showModal()
- hideModal()

## Custom hooks

- useBeaches (getBeathes, add, update, remove, getBeachById)
- useUser login
- useToken , getData
- useStorage set, get, remove

## Components

### App

- Receives a dispathc action
- getToken()
  if token => dispatch token to store and navigate to list (Current page)
  if not token => navigate to login
- Render layout
- SetCurrent page

### Layout

- Renders header
- Renders outlet

### Header

- Show the logo

### Navbar

- Show navLinks to navigate to home, addForm
- Receives dispatch
- Render logout button wich receives actionOnClick from props
- actionOnClick() => logoutUser(), removeToken()

### Button

- Receives a text
- Receives an action on click
- Receives a className
- Shows a button with the received text
- Calls the received action when the button is clicked

### LoginPage

- Render LoginForm
- sendCredentials(userCredentials)=> (loginUser, dispatch data, setToken, navigate to list)

### LoginForm

- Receives sendCredentials from props
- Have a own state
- Show a form

### AddBeachPage

- Render dataForm
- sendBeachData(beachData) => (addBeach, dispatch data to store, openModal, hideModal, navegate to list)

### DataForm

- Receives handleOnSubmit from props (sendBeachData)
- Receives button text
- Shows a form (name, region, town, image...)
- Receives from props a beach if there's a beach to modify
- If receives a beach from props => Initial state

### UpdateBeachPage

- Render dataForm that receives beachData
- sendBeachData(beachData) => (updateBeach, dispatch data to store, openModal, hideModal, navegate to list)

### ListPage

- getBeaches from API
- Receives a dispatch
- Dispatch loadBeachesActionCreator
- Render BeachesList
- Receives a collection of beaches from store
- Handle pagination

### BeachesList

- Receives a collection of beaches from props
- Renders as many beachCards as beaches are in the collection
- Create a actionOnClick to removeBeach de useBeaches, dispatch removeBeachActionCreator
- Create a detailsActionOnClick(id) and navigates to detail

### BeachCard

- Recieves beach data and action on click from props
- Renders all data
- Show image name and town
- Show delete button if id === user.id

### DetailBeachPage

- getBeachById() from useBeaches
- Show beach data and edit and delete button
- Create actionOnClick to give it to edit button to navigate to UpdateBeachPage with the id
