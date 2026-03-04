# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

---

## Repository Overview

**Name:** youssef
**Status:** Newly initialized — no application code exists yet.
**Current files:**
- `README.md` — placeholder heading only (`# youssef`)
- `CLAUDE.md` — this file

The repository has a single commit (`Initial commit`) on the `master` branch.

---

## Git Workflow

### Branch naming
Feature/task branches created by Claude must follow the pattern:

```
claude/<task-slug>-<session-id>
```

Example: `claude/claude-md-mmcmmfsl3ddozkzc-z7bSZ`

### Push procedure
Always use the `-u` flag when pushing a new branch:

```bash
git push -u origin <branch-name>
```

- **Never push directly to `master`** without explicit permission.
- Retry failed pushes up to 4 times with exponential backoff (2 s, 4 s, 8 s, 16 s) for network errors only.
- A 403 response usually means the branch name does not match the required pattern — fix the branch name rather than retrying.

### Commit messages
- Use the imperative mood: `Add feature X`, `Fix bug in Y`, `Update CLAUDE.md`.
- Keep the subject line under 72 characters.
- Add a blank line before a longer body if more explanation is needed.

---

## Development Conventions (to be updated as the project grows)

Because the codebase does not yet exist, the sections below are placeholders. Update them once a tech stack and structure are established.

### Project structure
> _Not yet defined. Add directory layout and purpose of each directory here._

### Language & runtime
> _Not yet defined. Document the language, runtime version, and package manager here._

### Installing dependencies
> _Not yet defined. Document the install command here (e.g., `npm install`, `pip install -r requirements.txt`)._

### Running the application
> _Not yet defined. Document the start command here._

### Running tests
> _Not yet defined. Document the test command here._

### Linting & formatting
> _Not yet defined. Document the lint/format commands and any pre-commit hooks here._

---

## Working with this Repository as an AI Assistant

1. **Read before editing.** Always read a file before modifying it to understand its current state.
2. **Minimal changes.** Only change what is directly requested or clearly necessary. Do not refactor, add comments, or introduce abstractions beyond the scope of the task.
3. **No security vulnerabilities.** Avoid introducing SQL injection, XSS, command injection, or other OWASP Top 10 issues.
4. **Keep this file current.** When the project structure, tooling, or conventions change, update the relevant sections of this file in the same commit.
5. **Branch discipline.** Develop on the designated `claude/...` branch. Never push to `master` without explicit instruction.
