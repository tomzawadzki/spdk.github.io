# spdk.github.io

Source of the [SPDK website](https://spdk.io). Jekyll builds the site
pages, and Doxygen builds the SPDK documentation under `doc/`.

## Requirements

- Ruby 3.2 or newer (CI uses 3.4.8). `bundle install` installs the
  Bundler version that `Gemfile.lock` records.
- Doxygen 1.18.0
- Python 3 with Jinja2, PyYAML and tabulate, for the SPDK documentation
  build
- System packages: `git make gcc-c++ cmake flex bison graphviz`

### Installing Doxygen

`_build/install-doxygen.sh` builds and installs the Doxygen release that
CI and SPDK use. Give it a prefix of its own, so it does not replace the
Doxygen that other SPDK checkouts use, and add it to `PATH` only in the
shell that builds the website:

```bash
_build/install-doxygen.sh "$HOME/.local/doxygen-1.18.0"
export PATH="$HOME/.local/doxygen-1.18.0/bin:$PATH"
```

## Local development

```bash
git clone https://review.spdk.io/spdk/spdk.github.io
git clone --depth 1 https://github.com/spdk/spdk

cd spdk.github.io
bundle install
_build/build-website.sh --serve ../spdk
```

The preview server listens on http://localhost:4000 and reloads the
pages you edit. A change to the SPDK docs needs another run of the
script. `_build/build-website.sh --help` lists the options.

## Fork deployment

A fork publishes the site at `https://USER.github.io/spdk.github.io/`.
It needs forks of both `spdk` and `spdk.github.io` under the same owner.

1. In the `spdk.github.io` fork, set Settings > Pages > Source to
   **GitHub Actions**, and enable workflows in the Actions tab if GitHub
   disabled them for the fork.
2. Push `spdk` to the `master` branch of its fork. The site build checks
   out the default branch of `spdk`.
3. Push `spdk.github.io` to `master`. That runs "Deploy SPDK Website",
   which you can also start from the Actions tab.

The footer of each page shows the `spdk` and `spdk.github.io` commits it
was built from. The daily scheduled deployment only runs upstream.

To redeploy when the docs change in the `spdk` fork, add a
`SITE_DISPATCH_TOKEN` secret to that fork. Without it the dispatch job
prints a notice and does nothing.

To test a change to `build-site.yml` through a fork of spdk-ci, change
the owner in the `uses:` line of `spdk-site-build.yml` to your own.
GitHub only accepts a fixed string there.

## Format checks

Install `codespell`, `yamllint`, `shellcheck` and `actionlint`, then run:

```bash
_build/check_format.sh
```

Add words that codespell flags but that are correct, such as NVMe
terms, to `_build/codespell-ignore-words.txt`, one per line.

## CI

| Workflow | Repository | Trigger | Purpose |
|---|---|---|---|
| `build-site.yml` | spdk.github.io | `workflow_call` | Format checks, Doxygen and Jekyll build |
| `deploy-site.yml` | spdk.github.io | push to master, dispatch, daily, manual | Build and publish to GitHub Pages |
| `trigger-site-deploy.yml` | spdk | push to master touching docs | Send `spdk-site-deploy` to spdk.github.io |
| `spdk-site-build.yml` | spdk-ci | Gerrit event, manual | Pre-merge build of a Gerrit change |

`SITE_DISPATCH_TOKEN` in spdk needs Contents write access to
spdk.github.io. Pre-merge validation uses the Gerrit bot credentials in
spdk-ci.

To build changes under review, run "Validate SPDK Website" in spdk-ci by
hand with `site_gerrit_ref`, `spdk_gerrit_ref` or both. That also covers
a website change that needs an SPDK change that is not merged yet.

## Updating Doxygen

The website and SPDK use the same Doxygen release. Change it in all of
these places together:

- `test/common/config/pkgdep/git` in SPDK
- `_build/install-doxygen.sh`
- `REQUIRED_DOXYGEN_VERSION` in `_build/build-website.sh`

`_doxygen/doc_head.html` started as the header that
`doxygen -w html header.html footer.html style.css` writes. It keeps the
stock scripts and placeholders, drops the title area, and adds two
scripts, the icon and stylesheet links and a skip link. The build puts
the navbar after it. To update it, generate the stock header of the old
and the new release, carry their differences over, and check search,
the side panels and the layout on a phone.

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
