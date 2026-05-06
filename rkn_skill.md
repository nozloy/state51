# Skill: RKN Personal Data Compliance Audit for Websites

## Purpose

Use this skill when reviewing a Russian-language website, landing page, SaaS product, ecommerce site, corporate site, or form-based web application for visible compliance risks related to Russian personal data requirements and Roskomnadzor-style checks.

The goal is to produce a developer-ready audit and implementation checklist covering:

- personal data collection points;
- consent checkboxes;
- privacy policy and consent documents;
- cookies and analytics notifications;
- Yandex Metrica and Google Analytics usage;
- employee names/photos published on the site;
- Roskomnadzor operator notification consistency;
- form behavior and blocking rules;
- missing legal links and UX issues.

This skill is not legal advice. Flag legal-review items separately.

---

## Source context

This skill is based on the practical checklist described in the Habr article:

- Article: "Началось: РКН запустил автоматический бот по сайтам"
- URL: https://habr.com/ru/articles/1029636/

The article highlights five mandatory areas to check on websites:

1. Personal data processing policy.
2. Separate consent to personal data processing.
3. Correct unchecked consent checkboxes under every form.
4. Cookie and Yandex Metrica notification.
5. Roskomnadzor operator notification.

It also discusses practical risks around old privacy policies, contact forms, Yandex Metrica, Google Analytics, employee photos, and inconsistency between the site, documents, and RKN notification.

Use this skill as a technical/product audit helper. Final legal wording should be reviewed by a qualified lawyer.

---

## When to use

Use this skill when the user asks to:

- check a site for personal data compliance;
- prepare a site before Roskomnadzor/RKN review;
- add required personal-data elements to a website;
- generate technical requirements for forms, checkboxes, cookies, analytics, or privacy documents;
- audit a landing page, CRM form, callback form, quiz, checkout, registration form, job application form, newsletter form, or contact form.

---

## Core assumptions

Treat the site as processing personal data if it contains or uses any of the following:

- contact forms;
- callback forms;
- order forms;
- registration or login;
- newsletter subscription;
- quiz/lead magnet forms;
- chat widgets;
- CRM integrations;
- payment/order flows;
- email, phone, name, Telegram/WhatsApp fields;
- employee photos, names, job titles, biographies, or contact details;
- Yandex Metrica, Google Analytics, pixels, cookies, call tracking, session replay, or other analytics scripts.

If any of these exist, assume that the site needs a visible personal-data compliance layer.

---

## Audit inputs

Ask for or inspect:

1. Site URL.
2. All pages with forms.
3. Source code or repository if available.
4. Existing documents:
   - privacy policy / personal data processing policy;
   - consent to personal data processing;
   - cookie policy or cookie notice text;
   - consent for distribution/publication of employee personal data, if employee profiles exist.
5. Analytics stack:
   - Yandex Metrica;
   - Google Analytics;
   - Google Tag Manager;
   - Meta/VK/other pixels;
   - call tracking;
   - heatmaps/session recorders.
6. Whether the operator has filed a Roskomnadzor notification.
7. The categories of personal data actually collected.
8. The categories of data subjects:
   - site visitors;
   - customers;
   - leads;
   - employees;
   - job applicants;
   - representatives of legal entities.

---

## Required audit output

Always return the result in this structure:

```md
# RKN / Personal Data Site Audit

## 1. Executive summary
- Overall risk: Low / Medium / High / Critical
- Main blockers:
- Quick fixes:
- Items requiring legal review:

## 2. Data collection map
| Page / component | Data collected | Subject category | Purpose | Risk | Required action |
|---|---|---|---|---|---|

## 3. Forms and consent checkboxes
| Form | Checkbox present | Prechecked? | Blocks submit without consent? | Links to documents? | Required action |
|---|---:|---:|---:|---:|---|

## 4. Documents
| Document | Present | Public URL | Covers current site behavior? | Required action |
|---|---:|---|---:|---|

## 5. Cookies and analytics
| Tool | Detected | Disclosed to user? | Consent obtained? | Cross-border risk | Required action |
|---|---:|---:|---:|---:|---|

## 6. Employee / public personal data
| Page | Personal data shown | Consent/distribution notice present? | Required action |
|---|---|---:|---|

## 7. RKN notification consistency
| Website fact | Must be reflected in RKN notification | Current status | Required action |
|---|---|---|---|

## 8. Developer task list
Use MUST / SHOULD / MAY priorities.

## 9. Acceptance criteria
Provide testable criteria.

## 10. Legal-review checklist
List items that require a lawyer or DPO-style review.
```

---

## RKN-style checks to perform

### 1. Check every form

For every form, verify:

- there is a separate consent checkbox;
- the checkbox is not preselected;
- form submission is impossible until the user actively checks the box;
- the checkbox text contains links to:
  - personal data processing policy;
  - consent to personal data processing;
- links open before form submission;
- the consent text is located near the submit button;
- consent is captured for each form separately;
- frontend validation is duplicated server-side.

Bad patterns:

- “By clicking the button, you agree…” without a checkbox;
- prechecked checkbox;
- only footer links to documents;
- one global checkbox outside the form;
- form can be submitted without consent;
- checkbox text links only to privacy policy but not to a separate consent document;
- hidden consent in modal text only.

Recommended pattern:

```html
<label>
  <input
    type="checkbox"
    name="personal_data_consent"
    required
    data-consent-version="2026-04-30"
  />
  Я даю согласие на обработку персональных данных в соответствии с
  <a href="/privacy-policy" target="_blank">Политикой обработки персональных данных</a>
  и
  <a href="/personal-data-consent" target="_blank">Согласием на обработку персональных данных</a>.
</label>
```

Frontend acceptance criteria:

- checkbox is empty by default;
- submit button is disabled or submission is blocked until checked;
- validation message appears if user tries to submit without consent;
- links are visible and clickable;
- checkbox state is sent with the form payload.

Backend acceptance criteria:

- reject form submissions without explicit consent;
- store consent timestamp;
- store consent document version;
- store source page URL;
- store user IP and user-agent only if covered by documents;
- log which form was submitted;
- store UTM/cookie/analytics identifiers only if disclosed.

---

### 2. Check privacy policy

The policy should visibly cover:

- operator name / company / individual entrepreneur;
- operator contacts;
- purposes of processing;
- categories of personal data;
- categories of data subjects;
- legal grounds for processing;
- processing actions;
- storage periods or criteria for determining them;
- procedure for correction, deletion, withdrawal, and subject requests;
- third-party processors;
- analytics and cookies;
- cross-border transfer, if applicable;
- security measures at a high level;
- publication date and version.

Flag as risk if:

- policy is generic and does not match the site;
- policy says data is processed only for “feedback” while site has orders, accounts, analytics, CRM, job forms, or newsletter;
- categories of data do not include phone/email/name actually collected;
- Yandex Metrica or Google Analytics is used but not mentioned;
- policy has outdated operator information;
- no process for withdrawal/deletion requests;
- storage period is indefinite without explanation;
- no version/date.

---

### 3. Check separate consent document

The consent document should be separate from the privacy policy.

It should include:

- operator identity and address/contact;
- specific purpose of processing;
- list of personal data;
- list of processing actions;
- processing methods;
- third parties/processors, if any;
- validity period;
- withdrawal method;
- reference to the policy;
- version/date.

Flag as risk if:

- consent is merged into policy only;
- consent is vague;
- consent does not match actual form fields;
- no withdrawal method;
- no validity period;
- no versioning.

---

### 4. Check cookies and Yandex Metrica

If Yandex Metrica is detected, check that:

- the site shows a cookie/analytics notice;
- the notice says the site uses cookies and analytics;
- documents describe what analytics collects and why;
- the privacy policy or cookie policy mentions Yandex Metrica;
- the cookie notice links to the relevant policy;
- analytics behavior matches the documents.

Recommended cookie notice:

```txt
Мы используем cookies и сервисы веб-аналитики, включая Яндекс.Метрику, чтобы анализировать посещаемость сайта и улучшать его работу. Продолжая пользоваться сайтом или нажимая «Принять», вы соглашаетесь с использованием cookies в соответствии с Политикой обработки персональных данных.
```

For stricter implementation, use explicit “Accept” and “Reject optional analytics” controls.

Flag as risk if:

- Yandex Metrica is present but not disclosed;
- cookie banner is absent;
- policy does not mention analytics;
- analytics starts before consent where explicit consent is required by the project’s legal position;
- data is sent to services not listed in documents.

---

### 5. Check Google Analytics and foreign services

If Google Analytics, Google Tag Manager, foreign pixels, foreign CRM, foreign email marketing, or foreign hosting/processors are detected:

- flag possible cross-border transfer issue;
- require legal review;
- check whether this is reflected in:
  - privacy policy;
  - consent document;
  - RKN notification;
  - processor list;
  - cross-border transfer section.

Risk levels:

- Google Analytics present and not disclosed: High.
- Google Analytics disclosed in policy but not in RKN notification: High.
- Foreign processors used for CRM/email/chat without disclosure: High.
- No foreign tools detected: Low for this section.

Recommended developer action:

- inventory all third-party scripts;
- remove unused analytics;
- block unapproved tags;
- document each third-party processor;
- expose script list to legal reviewer.

---

### 6. Check employee photos and names

If the site publishes employee data, check:

- names;
- photos;
- job titles;
- biographies;
- phone/email;
- social links;
- video testimonials;
- “team” pages;
- author cards.

Flag that the operator may need:

- employee consent for publication/distribution;
- separate consent for personal data permitted for distribution;
- visible prohibition or limitation on third-party use where appropriate;
- internal records proving consent.

Developer-facing requirement:

- add a visible notice near team/employee pages if requested by legal;
- ensure employee pages can be removed quickly;
- maintain a list of published employee profiles;
- do not publish extra employee data not needed for the page purpose.

---

### 7. Check RKN notification consistency

Compare the actual site against what should be in the RKN notification.

The notification should reflect:

- operator identity;
- website URL;
- categories of data subjects;
- categories of personal data;
- purposes of processing;
- legal basis;
- processing methods;
- storage location;
- security measures;
- cross-border transfer, if any;
- processors/third parties where applicable;
- start date and changes.

Flag as risk if:

- no RKN notification found or user says it was never filed;
- notification was filed long ago and site behavior changed;
- notification does not mention website collection;
- notification does not mention analytics;
- notification does not mention employee/public data;
- notification does not mention cross-border transfer while foreign services are used;
- notification purposes are narrower than actual site purposes.

Developer should not file the notification. Mark this as legal/administrative action.

---

## Detection heuristics for source code review

Search for form fields:

```regex
(name|phone|email|tel|fio|fullname|first_name|last_name|company|message|comment|address|telegram|whatsapp)
```

Search for analytics and pixels:

```regex
mc\.yandex\.ru|ym\(|YandexMetrika|googletagmanager|gtag\(|google-analytics|G-[A-Z0-9]+|UA-[A-Z0-9-]+|facebook\.net|fbq\(|vk\.com/rtrg|top-fwz1\.mail\.ru|roistat|calltouch|comagic|jivosite|livetex|carrotquest
```

Search for cookie usage:

```regex
document\.cookie|localStorage|sessionStorage|cookieConsent|CookieConsent|cookies
```

Search for consent UI:

```regex
consent|agreement|privacy|policy|personal.?data|персональн|соглас|политик|checkbox|required
```

Search for employee/team pages:

```regex
/team|/about|/employees|/staff|команда|сотрудники|эксперты|специалисты|врачи|юристы|авторы
```

---

## Risk scoring

Use this scoring:

### Critical

- Forms collect personal data but there is no consent mechanism at all.
- Site collects personal data and no privacy policy is available.
- Google Analytics or foreign processors are used without disclosure and no legal review.
- RKN notification is absent for a business that clearly processes personal data.
- Sensitive or employee data is published without any visible or documented basis.

### High

- Checkbox is prechecked.
- Form submits without checkbox.
- Consent is not separate from policy.
- Yandex Metrica is present but not disclosed.
- Privacy policy does not match actual data collection.
- RKN notification likely outdated.
- Employee photos/names are published without consent tracking.

### Medium

- Documents exist but are generic.
- Cookie banner exists but lacks links or clear wording.
- Consent version is not stored.
- Server accepts submissions without consent field.
- Some forms are compliant, others are not.

### Low

- Minor wording, UX, or versioning gaps.
- Documents mostly match site but need legal polishing.
- Analytics disclosed but implementation needs clearer controls.

---

## Developer task template

For every issue, produce tasks in this format:

```md
### TASK-[number]: [Short title]

Priority: MUST / SHOULD / MAY  
Risk: Critical / High / Medium / Low  
Area: Frontend / Backend / Legal content / Analytics / Infrastructure

Problem:
[What is wrong]

Required change:
[What to implement]

Implementation notes:
[Concrete technical notes]

Acceptance criteria:
- [Testable criterion 1]
- [Testable criterion 2]
- [Testable criterion 3]

Needs legal review:
Yes / No
```

---

## Minimum required implementation package

If the site has any form collecting personal data, recommend at minimum:

1. Public personal data processing policy page.
2. Separate consent to personal data processing page.
3. Required unchecked checkbox under every form.
4. Form submit blocked without checkbox.
5. Server-side validation of consent.
6. Consent logging:
   - timestamp;
   - form ID;
   - page URL;
   - document versions;
   - checkbox value;
   - submitted data categories.
7. Cookie/analytics notice if cookies or analytics are used.
8. Yandex Metrica disclosure if used.
9. Google Analytics / foreign processor legal review if used.
10. RKN notification status check.
11. Employee/public personal data consent check if team pages exist.

---

## Suggested site footer links

Recommend these footer links:

```txt
Политика обработки персональных данных
Согласие на обработку персональных данных
Политика использования cookies
```

If only one cookie section exists inside the privacy policy, the cookie link may point to the relevant anchor:

```txt
Политика обработки персональных данных#cookies
```

---

## Suggested form consent text

Use as a developer placeholder only; require legal approval before production:

```txt
Я даю согласие на обработку моих персональных данных в соответствии с Политикой обработки персональных данных и Согласием на обработку персональных данных.
```

With links:

```html
Я даю согласие на обработку моих персональных данных в соответствии с
<a href="/privacy-policy" target="_blank">Политикой обработки персональных данных</a>
и
<a href="/personal-data-consent" target="_blank">Согласием на обработку персональных данных</a>.
```

---

## Suggested cookie notice text

Use as a developer placeholder only; require legal approval before production:

```txt
Мы используем cookies и сервисы аналитики, чтобы улучшать работу сайта и анализировать посещаемость. Подробнее — в Политике обработки персональных данных.
```

If Yandex Metrica is used:

```txt
Мы используем cookies и Яндекс.Метрику для анализа посещаемости и улучшения работы сайта. Подробнее — в Политике обработки персональных данных.
```

---

## Acceptance test scenarios

Run these tests manually or with Playwright/Cypress.

### Consent checkbox tests

1. Open each form.
2. Confirm checkbox is unchecked by default.
3. Try to submit without checking it.
4. Expected: form is not submitted.
5. Check the box.
6. Submit valid data.
7. Expected: form submits successfully.
8. Verify backend received consent = true.
9. Verify consent timestamp and document version are stored.

### Document link tests

1. Click policy link from every form.
2. Expected: policy opens.
3. Click consent link from every form.
4. Expected: consent document opens.
5. Check footer links.
6. Expected: all legal pages are reachable.

### Analytics tests

1. Inspect network requests.
2. Detect Yandex Metrica / Google Analytics / pixels.
3. Compare detected tools with policy and cookie notice.
4. Expected: every detected tool is disclosed or removed.

### RKN consistency tests

1. List actual data collected by the site.
2. List actual analytics/third-party services.
3. List actual categories of users.
4. Compare with RKN notification, if available.
5. Expected: no mismatch.

### Employee data tests

1. Open team/about/author pages.
2. List visible employee personal data.
3. Confirm consent records exist outside the codebase.
4. Expected: legal owner confirms publication basis.

---

## Output style

Be direct and practical.

Do not say “the site is compliant” unless legal review confirmed it.

Prefer:

- “No visible issue found”
- “Potential risk”
- “Requires legal review”
- “Developer can implement”
- “Operator/admin must verify”

Avoid making final legal conclusions.

---

## Final response checklist

Before returning the audit, confirm that you covered:

- all forms;
- checkbox behavior;
- privacy policy;
- separate consent;
- cookies;
- Yandex Metrica;
- Google Analytics / foreign services;
- employee/public personal data;
- RKN notification;
- backend consent logging;
- developer tasks;
- acceptance criteria;
- legal-review items.
