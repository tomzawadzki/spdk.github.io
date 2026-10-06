# spdk.github.io

Source for the [SPDK website](https://www.spdk.io). Jekyll builds the
site pages and Doxygen builds the SPDK documentation under `doc/`.

## Requirements

- Ruby 3.2 or newer (CI uses 3.4.8) and Bundler 2.6.9
  (`gem install bundler -v 2.6.9`)
- Doxygen 1.18.0
- Python 3 with Jinja2, PyYAML and tabulate, used by the SPDK
  documentation build
- System packages: `git make gcc-c++ cmake flex bison mscgen graphviz`

### Installing Doxygen

`_build/install-doxygen.sh` builds and installs the Doxygen release that
CI and SPDK use. Pick a writable prefix and add it to `PATH`:

```bash
_build/install-doxygen.sh "$HOME/.local"
export PATH="$HOME/.local/bin:$PATH"
```

## Local development

```bash
git clone https://review.spdk.io/spdk/spdk.github.io
git clone --depth 1 https://github.com/spdk/spdk

cd spdk.github.io
bundle _2.6.9_ install
_build/build-website.sh --spdk-path ../spdk --serve
```

The preview server listens on http://localhost:4000. Without `--serve`
the site is built once into `_site`. Without `--spdk-path` the script
clones SPDK from GitHub.

To build the site the way a fork deployment does, add
`--url https://USER.github.io --baseurl /spdk.github.io`.

## Fork deployment

1. Push `spdk` and `spdk.github.io` to the `master` branch of forks under
   the same GitHub owner. The build uses the default branch of both
   repositories, and GitHub Pages only deploys from the default branch.
2. In the `spdk.github.io` fork, set Settings > Pages > Source to
   **GitHub Actions**.
3. Run "Deploy SPDK Website" from the Actions tab, or push to `master`.
   The site appears at `https://USER.github.io/spdk.github.io/`, and the
   footer shows which `spdk` and `spdk.github.io` commits it was built from.

The daily scheduled deployment only runs upstream.

To redeploy automatically when documentation changes in the `spdk` fork,
add a `SITE_DISPATCH_TOKEN` secret to that fork. Without it the dispatch
job is skipped.

To test changes to `build-site.yml` through a fork of spdk-ci, change the
owner in the `uses:` line of `spdk-site-build.yml` to your own. GitHub
only accepts a fixed string there.

## Format checks

Install `codespell`, `yamllint`, `shellcheck` and `actionlint`, then run:

```bash
_build/check_format.sh
```

## CI

| Workflow | Repository | Trigger | Purpose |
|---|---|---|---|
| `build-site.yml` | spdk.github.io | `workflow_call` | Format checks, Doxygen and Jekyll build |
| `deploy-site.yml` | spdk.github.io | push to master, dispatch, daily, manual | Build and publish to GitHub Pages |
| `trigger-site-deploy.yml` | spdk | push to master touching docs | Send `spdk-site-deploy` to spdk.github.io |
| `spdk-site-build.yml` | spdk-ci | Gerrit event, manual | Pre-merge build of a Gerrit change |

`SITE_DISPATCH_TOKEN` in spdk needs permission to dispatch workflows in
spdk.github.io. Pre-merge validation uses the Gerrit bot credentials in
spdk-ci.

## Directory layout

```
_build/              Build and format check scripts
_data/               Jekyll data files (sidebars)
_doxygen/            Doxygen header template
_includes/           Shared HTML parts (navbar, footer, head)
_layouts/            Jekyll page layouts
_posts/              Blog and news posts
_redirects/          Redirects for pages moved to the SPDK docs
.github/workflows/   CI workflows
assets/              Static files (CSS, images, JS, downloads)
cn/                  Chinese pages
```
