const core = require('@actions/core')
const github = require('@actions/github')
try{
    const title = core.getInput('title')
    const body = core.getInput('body')
    const assignees = core.getInput('assignees')
    const token = core.getInput('token')
    const octokit = new github.GitHub(token)
    
    const response = octokit.rest.issues.create({
        ...github.context.repo, // owner , repo
        title,
        body,
        assignees: assignees ? assignees.split('\n') : undefined
      });
    
    core.setOutput('issue', JSON.stringify(response.data))

} catch(err){
    core.setFailed(err.message)
}