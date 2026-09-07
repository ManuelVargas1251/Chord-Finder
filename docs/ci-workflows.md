# CI Workflows

This chart documents the Node.js CI, production GitHub Pages, and pull request preview workflows.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '12px', 'primaryTextColor': '#172033', 'lineColor': '#64748b'}, 'flowchart': {'nodeSpacing': 20, 'rankSpacing': 25, 'padding': 8}}}%%
flowchart TB
  subgraph ci["Node.js CI"]
    direction TB
    subgraph ciTriggerGroup["Trigger"]
      ciTrigger["Push / Pull Request / Manual"]
    end
    subgraph ciSetupGroup["Setup"]
      direction TB
      ciCheckout["Checkout event ref"] --> ciSetup["Node.js 24"] --> ciInstall["npm ci"]
    end
    subgraph ciTestGroup["Test"]
      ciTest["npm test"]
    end
    subgraph ciOutputGroup["Report / Build"]
      direction TB
      ciCoverage["Upload coverage artifact"] --> ciComment["Comment coverage on PR"] --> ciBuild["npm run build"]
    end
    ciTrigger --> ciCheckout
    ciInstall --> ciTest --> ciCoverage
  end

  subgraph production["Deploy GitHub Pages"]
    direction TB
    subgraph productionTriggerGroup["Trigger"]
      productionTrigger["Push to development or master / Manual"]
    end
    subgraph productionSetupGroup["Setup"]
      direction TB
      productionCheckout["Checkout master"] --> productionSetup["Node.js 24"] --> productionInstall["npm ci"]
    end
    subgraph productionOutputGroup["Build / Publish"]
      direction TB
      productionBuild["npm run build"] --> productionPrepare["Prepare Pages site"] --> productionDeploy["Deploy to gh-pages"]
    end
    productionTrigger --> productionCheckout
    productionInstall --> productionBuild
  end

  subgraph preview["Deploy PR Preview"]
    direction TB
    subgraph previewTriggerGroup["Trigger"]
      direction TB
      previewTrigger["PR opened / reopened / synchronized"]
      previewClosed["PR closed"]
    end
    subgraph previewSetupGroup["Setup"]
      direction TB
      previewCheckout["Checkout PR"] --> previewSetup["Node.js 24"] --> previewInstall["npm ci"]
    end
    subgraph previewOutputGroup["Build / Publish"]
      direction TB
      previewBuild["npm run build"] --> previewPrepare["Prepare Pages site"] --> previewDeploy["Deploy pr-preview/pr-number"] --> previewComment["Add preview comment"]
    end
    subgraph previewCleanupGroup["Cleanup"]
      direction TB
      cleanupCheckout["Checkout base branch"] --> emptySite["Prepare empty site"] --> removePreview["Remove pr-preview/pr-number"] --> removeComment["Remove preview comment"]
    end
    previewTrigger --> previewCheckout
    previewInstall --> previewBuild
    previewClosed --> cleanupCheckout
  end

  classDef triggerStyle fill:#fef3c7,stroke:#d97706,color:#172033
  classDef setupStyle fill:#e8f1ff,stroke:#2563eb,color:#172033
  classDef testStyle fill:#fff7ed,stroke:#ea580c,color:#172033
  classDef outputStyle fill:#ecfdf5,stroke:#16a34a,color:#172033
  classDef cleanupStyle fill:#fce7f3,stroke:#db2777,color:#172033
  class ciTrigger,productionTrigger,previewTrigger,previewClosed triggerStyle
  class ciCheckout,ciSetup,ciInstall,productionCheckout,productionSetup,productionInstall,previewCheckout,previewSetup,previewInstall,cleanupCheckout setupStyle
  class ciTest testStyle
  class ciCoverage,ciComment,ciBuild,productionBuild,productionPrepare,productionDeploy,previewBuild,previewPrepare,previewDeploy,previewComment outputStyle
  class emptySite,removePreview,removeComment cleanupStyle
  style ci fill:#f8fafc,stroke:#94a3b8,color:#172033
  style ciTriggerGroup fill:#fffbeb,stroke:#d97706,color:#172033
  style ciSetupGroup fill:#eff6ff,stroke:#2563eb,color:#172033
  style ciTestGroup fill:#fff7ed,stroke:#ea580c,color:#172033
  style ciOutputGroup fill:#ecfdf5,stroke:#16a34a,color:#172033
  style production fill:#f8fafc,stroke:#94a3b8,color:#172033
  style productionTriggerGroup fill:#fffbeb,stroke:#d97706,color:#172033
  style productionSetupGroup fill:#eff6ff,stroke:#2563eb,color:#172033
  style productionOutputGroup fill:#ecfdf5,stroke:#16a34a,color:#172033
  style preview fill:#f8fafc,stroke:#94a3b8,color:#172033
  style previewTriggerGroup fill:#fffbeb,stroke:#d97706,color:#172033
  style previewSetupGroup fill:#eff6ff,stroke:#2563eb,color:#172033
  style previewOutputGroup fill:#ecfdf5,stroke:#16a34a,color:#172033
  style previewCleanupGroup fill:#fdf2f8,stroke:#db2777,color:#172033
```

The PR coverage comment displays a static image for mobile users and links back to this source chart for desktop users.