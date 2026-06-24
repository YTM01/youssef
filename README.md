# AI Startup OS

## Mission

Transformer n’importe quelle idée en projet **structuré, détaillé, critiqué, priorisé, découpé** et prêt à être exécuté dans Claude Code.

## Positionnement

### Ce que l’app n’est pas
- Pas un chatbot
- Pas un outil de code direct
- Pas un Notion-like décoratif
- Pas un dashboard esthétique sans utilité opérationnelle

### Ce que l’app est
- Un bureau de CEO
- Une équipe virtuelle multi-agents
- Une machine de décomposition d’idées
- Une usine à prompts propres
- Une source de vérité projet

## Principe directeur

Séparation stricte :

**THINK → ORGANIZE → VALIDATE → SPECIFY → PROMPT → BUILD**

- **AI Startup OS** : pense, structure, décide, découpe
- **Claude Code** : exécute, code, teste, corrige

## Flow global recommandé

```text
IDEA or IMPORT PROJECT
↓
Project Intake
↓
CEO Agent
↓
Smart Method Selector
↓
Problem Validation
↓
AI Meeting (on-demand)
↓
Meeting Summary Agent
↓
PDF Generator Agent
↓
Strategy Sync Agent
↓
Decision Engine
↓
Agent Orchestrator
↓
Architecture Agent
↓
Scope Reduction Agent
↓
Feasibility Agent
↓
UX Flow Agent
↓
Data Model Agent
↓
API Design Agent
↓
Risk Analysis Agent
↓
Value Optimization Agent
↓
Test Scenario Agent
↓
Decomposition Engine
↓
Roadmap Engine
↓
Prompt Optimizer Agent
↓
Prompt Studio
↓
Claude Code
↓
Build Feedback
↓
Project Memory Update
↓
Planning / Tracking Update
```

## Modules

### A. Project Intake
- **Rôle** : cadrer le projet dès le départ
- **Entrées** : type de projet, cible, objectif, stack, complexité, priorité vitesse/qualité, outil d’exécution
- **Sortie** : Project Brief

### B. Import Project
- **Rôle** : transformer une idée déjà préparée (étude de marché, architecture, stratégie, roadmap, etc.) en données projet exploitables

### C. CEO Agent
- **Rôle** : orchestrateur principal (reformulation, clarification, priorisation globale, choix des agents, arbitrage final)

### D. Smart Method Selector
- **Rôle** : adapter la méthode selon le type de projet (SaaS, site web, automation, etc.)

### E. Problem Validation
- **Rôle** : valider le problème avant d’avancer
- **Questions** : réalité, fréquence, urgence, douleur, monétisation, automatisation

### F. AI Meeting (on-demand)
- **Rôle** : réunion structurée à la demande pour clarifier et trancher

### G. Meeting Summary Agent
- **Rôle** : produire une synthèse exploitable
- **Format** : contexte, points discutés, décisions, changements, risques, prochaines actions

### H. PDF Generator Agent
- **Rôle** : produire un compte rendu officiel de meeting au format PDF

### I. Strategy Sync Agent
- **Rôle** : synchroniser automatiquement mémoire, tâches, roadmap, architecture et prompts lors d’un changement stratégique

### J. Decision Engine
- **Rôle** : trancher le scope MVP et les priorités

### K. Agent Orchestrator
- **Rôle** : coordonner les agents spécialisés, éviter les contradictions, collecter les sorties

### L–T. Agents spécialisés
- Architecture Agent
- Scope Reduction Agent
- Feasibility Agent
- UX Flow Agent
- Data Model Agent
- API Design Agent
- Risk Analysis Agent
- Value Optimization Agent
- Test Scenario Agent

### U. Decomposition Engine
- **Rôle** : découper en modules, sous-modules, dépendances et ordre logique

### V. Roadmap Engine
- **Rôle** : transformer le découpage en plan concret (étapes, priorités, séquence)

### W. Prompt Optimizer Agent
- **Rôle** : nettoyer, standardiser et réduire le contexte en prompts exploitables

### X. Prompt Studio
- **Rôle** : générer des prompt packages finaux (clairs, petits, ciblés, modulaires, testables)

### Y. Build Feedback
- **Rôle** : analyser les retours d’exécution Claude Code

### Z. Project Memory / Planning / Tracking
- **Rôle** : maintenir l’état réel du projet (décisions, tâches, versions, prompts, historique, blocages)

## Framework commun à tous les agents

1. Comprendre l’entrée
2. Détecter le problème central
3. Valider la pertinence
4. Définir la meilleure solution pratique
5. Réduire au scope exécutable
6. Structurer la solution
7. Identifier risques et contraintes
8. Préparer l’exécution
9. Renvoyer une sortie structurée uniquement

## Protocole anti-chaos

1. Chaque agent a une seule responsabilité
2. Seuls CEO Agent et Decision Engine prennent les décisions finales
3. Les agents spécialisés recommandent, ils ne décident pas
4. Toutes les sorties passent par l’Agent Orchestrator
5. Aucune mise à jour mémoire canonique sans validation orchestrée

## Architecture technique recommandée

```text
ai-startup-os/
├─ apps/
│  ├─ web/
│  ├─ api/
│  └─ workers/
├─ domains/
│  ├─ project-intake/
│  ├─ import-project/
│  ├─ ceo/
│  ├─ method-selector/
│  ├─ problem-validation/
│  ├─ ai-meeting/
│  ├─ meeting-summary/
│  ├─ pdf-reporting/
│  ├─ strategy-sync/
│  ├─ decision-engine/
│  ├─ orchestrator/
│  ├─ architecture/
│  ├─ scope-reduction/
│  ├─ feasibility/
│  ├─ ux-flow/
│  ├─ data-model/
│  ├─ api-design/
│  ├─ risk-analysis/
│  ├─ value-optimization/
│  ├─ test-scenarios/
│  ├─ decomposition/
│  ├─ roadmap/
│  ├─ prompt-optimization/
│  ├─ prompt-studio/
│  ├─ project-memory/
│  ├─ planning/
│  └─ tracking/
├─ packages/
│  ├─ ui/
│  ├─ schemas/
│  ├─ prompts/
│  ├─ config/
│  └─ utils/
├─ services/
│  ├─ llm-gateway/
│  ├─ pdf-service/
│  ├─ memory-service/
│  ├─ ide-bridge/
│  └─ integrations/
├─ docs/
├─ tests/
├─ .github/
├─ CLAUDE.md
└─ README.md
```

## Noyau stratégique

Le noyau différenciant du système :

**Problem Validation → Decomposition Engine → Roadmap Engine**

C’est ce trio qui maximise la qualité d’exécution en aval (prompts, build, tests, itérations).
