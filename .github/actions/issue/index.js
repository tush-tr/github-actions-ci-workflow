const core = require('@actions/core')
const github = require('@actions/github')
const run = async () => {
    try {
        const title = core.getInput('title')
        const body = core.getInput('body')
        const assignees = core.getInput('assignees')
        const token = core.getInput('token')
        const octokit = new github.getOctokit(token)

        const response = await octokit.rest.issues.create({
            ...github.context.repo, // owner , repo
            title,
            body,
            assignees: assignees ? assignees.split(',') : undefined
        });

        core.setOutput('issue', JSON.stringify(response.data))

    } catch (err) {
        core.setFailed(err.message)
    }
}
run();