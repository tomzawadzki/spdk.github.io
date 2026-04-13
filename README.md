# spdk.github.io

Source for the [SPDK website](https://www.spdk.io). Built with Jekyll
and Doxygen.

## Requirements

- Ruby >= 3.2 and Bundler 2.6.9 (`gem install bundler -v 2.6.9`)
- Doxygen 1.17.0
- Python 3 with Jinja2 and tabulate (used by SPDK documentation generation)
- System packages: `cmake flex bison mscgen graphviz`


### Installing Doxygen

The CI and local builds use the helper in the spdk repo:

```bash
export GIT_REPOS=/tmp/git_repos
mkdir -p "$GIT_REPOS"
source /path/to/spdk/test/common/config/pkgdep/git
install_doxygen
```

## Local development

```bash
git clone https://review.spdk.io/spdk/spdk.github.io
git clone --depth 1 https://github.com/spdk/spdk

cd spdk.github.io
bundle install
_build/build-website.sh --spdk-path ../spdk --serve
```

The development server listens on http://localhost:4000. Omit `--serve` for a
one-time build in `_site`.

Without `--spdk-path`, the script clones spdk from GitHub automatically.

Use `--url https://USER.github.io --baseurl /spdk.github.io` to reproduce a
fork deployment locally.

## Fork deployment

Fork both `spdk.github.io` and `spdk` under the same GitHub owner, then enable
GitHub Pages for the website fork with **Source: GitHub Actions**. The deploy
workflow selects the matching SPDK fork and configures `/spdk.github.io`
automatically.

## Format checks

Install `codespell`, `yamllint`, `shellcheck`, and `actionlint`, then run:

```bash
_build/check_format.sh
```

## CI/CD

| Workflow | Repo | Trigger | Purpose |
|---|---|---|---|
| `build-site.yml` | spdk.github.io | `workflow_call` | Reusable build (format checks + Doxygen + Jekyll) |
| `deploy-site.yml` | spdk.github.io | push to master, dispatch, daily cron, manual | Calls `build-site.yml` then deploys; auto-sets baseurl for forks |
| `trigger-site-deploy.yml` | spdk | push to master (doc paths) | Dispatches `spdk-site-deploy` to spdk.github.io |
| `spdk-site-build.yml` | spdk-ci | `spdk-site-validation` dispatch, manual | Pre-merge Gerrit check; calls `build-site.yml` with a Gerrit refspec |

## Directory layout

```
_build/              Build and format-check scripts
_data/               Jekyll data files (sidebars, auto-generated versions)
_doxygen/            Doxygen header template and overrides
_includes/           Shared HTML partials (navbar, footer, head)
_layouts/            Jekyll page layouts (base.html + variants)
_posts/              Blog / news posts
_redirects/          Redirect stubs for content moved to spdk/doc/
.github/workflows/   CI/CD workflow definitions
assets/              Static files (CSS, images, JS, downloads)
cn/                  Chinese-language mirror pages
```
