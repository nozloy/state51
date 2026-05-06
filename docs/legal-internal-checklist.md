# Internal Legal Checklist (RKN / 152-FZ)

Date: 2026-05-06  
Project: State51 (`barberstate51.ru`)

This file is an internal operational checklist for the operator and team.  
It is not a public policy page and does not replace legal advice.

## 1) Operator records

- [ ] Confirm operator card data is current (name, INN, contact e-mail, phone).
- [ ] Confirm RKN operator notification reflects current site behavior.
- [ ] Keep a changelog of policy updates and publication dates.

## 2) Consent evidence

- [ ] Keep current versions of:
  - [ ] personal data processing policy;
  - [ ] personal data consent;
  - [ ] cookies/analytics policy.
- [ ] Store evidence that form submissions are accepted only with explicit consent.
- [ ] Keep server audit logs for consent events (form ID, timestamp, consent version, source page).

## 3) Third-party processors and analytics

- [ ] Verify current use of YClients is reflected in legal documents.
- [ ] Verify Yandex Metrica usage is reflected in legal documents.
- [ ] Verify no unaccounted foreign analytics/pixels are added.

## 4) Employee/public personal data

- [ ] Keep signed consent for publication of employee/owner data (photo, name, role).
- [ ] Keep the list of published employee data fields.
- [ ] Keep a documented process to remove employee profile data upon request.

## 5) Release checks

- [ ] Legal links are visible and reachable from forms, footer, and secondary menu.
- [ ] Consent checkbox is unchecked by default in all PII forms.
- [ ] Backend rejects submissions without consent payload.
- [ ] Cookie settings can be reopened and updated from `/cookies`.
