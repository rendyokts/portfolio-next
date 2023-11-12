import React from "react";

import axios from "axios";

import {
  GITHUB_ACCOUNTS,
  GITHUB_API_BASE_URL,
  GITHUB_USER_QUERY,
} from "../commons/constants/github";
import Index from "./components/Index";

async function DashboardPage() {
  const githubData = await getGithubData();

  return (
    <div>
      <Index githubData={githubData} />
    </div>
  );
}

export default DashboardPage;

async function getGithubData() {
  const response = await axios.post(
    GITHUB_API_BASE_URL,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username,
      },
    },
    {
      headers: {
        Authorization: `bearer ${GITHUB_ACCOUNTS.token}`,
      },
    }
  );
  return response.data?.data.user.contributionsCollection.contributionCalendar;
}
