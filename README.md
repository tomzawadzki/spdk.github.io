# spdk.github.io

Source for the [SPDK website](https://www.spdk.io). Built with Jekyll
and Doxygen.

## Prerequisites

- Ruby >= 3.2 and Bundler (`gem install bundler`)
- Doxygen 1.16.1 (built from source, see below)
- System packages: `cmake flex bison mscgen graphviz`
- Python tools: `codespell`, `yamllint` (via `pipx`)
- `shellcheck`

### Installing Doxygen

The CI and local builds use the helper in the spdk repo:

```bash
export GIT_REPOS=/tmp/git_repos
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

This builds Doxygen docs, assembles the Jekyll site, and starts a
local server at http://localhost:4000.

Without `--spdk-path`, the script clones spdk from GitHub automatically.

## Fork-based testing

Push to a fork with GitHub Pages enabled (Settings > Pages > Source:
GitHub Actions). The deploy workflow automatically detects forks and
builds with `/spdk.github.io` as the base URL.

## Format checks

```bash
_build/check_format.sh
```

Runs four checks: trailing whitespace / EOF newlines, shellcheck,
codespell, and yamllint. The CI runs these before every build.

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
