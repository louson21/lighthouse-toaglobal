# 🚀 TOA Global Lighthouse Reports

This repository stores Lighthouse performance reports for TOA Global's pages.

## 📊 Access the Reports

To view the latest Lighthouse reports, visit:

🔗 **[Lighthouse Reports Dashboard](https://louson21.github.io/lighthouse-toaglobal/index.html)**

This page lists all scanned pages along with their before/after performance reports.

## 📖 How It Works

1. The reports are automatically generated and stored inside the `/results/` folder.
2. Each page's performance is tracked over time.
3. The table dynamically updates as new reports are added.

## 🔄 Updating Reports

- The repository runs a GitHub Action that scans `/results/` and updates `directories.json`.
- The `index.html` file dynamically pulls data from `directories.json` to display the reports.
- The repo owner should upload Lighthouse-generated HTML report file.