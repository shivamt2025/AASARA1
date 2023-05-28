# AASARA

It is a website which connects doctors, patients, and services like nursing placements and international admissions. <br/>
The patient can choose a date and doctor to consult, the system will automatically generate appointment time based on the doctor's schedule. The patient can also view his current and past appointments and view placement details <br/>
The doctor on the other hand can accept/reject the appointment, view all his current and past appointments and upload detailed prescriptions for the patient.<br/>

## Visit Online

This website is hosted at [https://aasara.glitch.me ](https://aasara.glitch.me )

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Your machine should have Npm(or Yarn), Node.js, and MongoDB installed to use it locally.

## Setup and Installation

### Setting up the repository locally

1. First fork the repo :fork_and_knife: to your account.  
   Go to the forked repo and clone it :busts_in_silhouette: to your local machine:

```sh
git clone https://github.com/Your_Username/AASARA1.git
```

This will make a copy of the code to your local machine.

2. Now move to the `MedBuddy` directory.

```sh
cd AASARA1
```

3. Now check the remote of your local code by:

```sh
git remote -v
```

The response should look like:

```sh
origin	https://github.com/Your_Username/AASARA1.git (fetch)
origin	https://github.com/Your_Username/AASARA1.git (push)
```

To add upstream to remote, run:

```sh
git remote add upstream https://github.com/shivamt2025/AASARA1.git
```

Again run `git remote -v`, the response should look like:

```sh
origin	https://github.com/Your_Username/AASARA1.git (fetch)
origin	https://github.com/Your_Username/AASARA1.git (push)
upstream	https://github.com/shivamt2025/AASARA1 (fetch)
upstream	https://github.com/shivamt2025/AASARA1 (push)
```

4. Once the remote is set, install all the necessary dependencies by the following command:

```sh
npm install
```
### Run locally

Run the below command to start the server:

```sh
npm run dev
```
Go to: [http://localhost:4000](http://localhost:4000)

