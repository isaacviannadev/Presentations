# TARS · Suite Scheduling

Speaker notes for the 42-section interactive design presentation. Screens are illustrative design proposals; backend contracts remain open.

## 01 · Suite Scheduling

Design proposal with illustrative data. Screens and components are editable in Figma. Scheduler contracts still need to be defined and validated.

## 02 · Create a schedule, step by step

HF-10 → HF-12 → HF-33 → HF-14 → HF-15
These states illustrate the proposed flow. Actual controls depend on authoritative scheduler responses.

## 03 · Edit a single occurrence

HF-08 → HF-16 → HF-17 → HF-35 → HF-36
These states illustrate the proposed flow. Actual controls depend on authoritative scheduler responses.

## 04 · Start from a Suite

HF-10 — Start from a Suite
Entry: Suites / details
Action: Inspect the Suite and choose Schedule this Suite
Exit: Schedule form with Suite context
Rule: The Suite supplies its worker and devices. TestCases must match that worker.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-68340
Design scenario with illustrative data.

## 05 · Start from the overview

HF-11 — Start from the overview
Entry: Schedule a Suite in Schedules
Action: Search for and select a Suite in the current domain
Exit: The same form with the selected Suite
Rule: Suite selection is paginated. The worker is inherited.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-68572
Design scenario with illustrative data.

## 06 · Schedule form with a conflict

HF-12 — Schedule form with a conflict
Entry: Select a Suite or edit its start time
Action: Set the time and recurrence, then inspect device overlap
Exit: Try another time, change options or open the full preview
Rule: A known conflict blocks creation and editing. Form values are preserved.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-68823
Design scenario with illustrative data.

## 07 · Schedule form without conflicts

HF-33 — Schedule form without conflicts
Entry: Try new time and recheck
Action: Review the recalculated dates and continue
Exit: Creation review
Rule: The suggested time applies to the chosen scope. Recheck before treating conflicts as resolved.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-69164
Design scenario with illustrative data.

## 08 · Cron recurrence

HF-13 — Cron recurrence
Entry: Simple / Cron switch
Action: Edit the expression, read its meaning and select a forecast date
Exit: Cron preview and review
Rule: Forecast dates and verified device availability have different horizons.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-69506
Design scenario with illustrative data.

## 09 · Execution options

HF-24 — Execution options
Entry: Advanced execution options
Action: Set retry, trace, release and the maximum runtime
Exit: The form with the selected options
Rule: Estimated runtime, timeout and reserved device intervals are distinct. Their relationship needs a scheduler contract.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-69842
Design scenario with illustrative data.

## 10 · Recurrence modes and end conditions

HF-25 — Recurrence modes and end conditions
Entry: Edit Repeat / Ends
Action: Once, Daily or Weekly. End after a count, on a date or never.
Exit: Recalculated preview
Rule: A Cron rule that cannot map to Simple needs an explicit conversion decision.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69108
Design scenario with illustrative data.

## 11 · Full preview and a later date

HF-27 — Full preview and a later date
Entry: Select an occurrence or open all dates
Action: Inspect ten dates and select the second conflicting date
Exit: That date's device timeline, another start time or review
Rule: Conflicts on the first and fifth occurrences are independent.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69406
Design scenario with illustrative data.

## 12 · Simple recurrence review

HF-14 — Simple recurrence review
Entry: Review schedule
Action: Confirm the Suite, dates, timezone and availability
Exit: Submitting, confirmed or a late conflict
Rule: Recheck on confirmation. The scheduler must prevent concurrent device use.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69712
Design scenario with illustrative data.

## 13 · Open-ended Cron review

HF-34 — Open-ended Cron review
Entry: Review schedule in Cron mode
Action: Distinguish forecasts, the verified horizon and later dates
Exit: Check the policy and horizon, or return to editing
Rule: Checking ten dates does not guarantee availability for an unlimited recurrence.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-70360
Design scenario with illustrative data.

## 14 · Creation confirmed

HF-15 — Creation confirmed
Entry: A confirmed create response
Action: Inspect the schedule ID, first occurrence and scope
Exit: Agenda, schedule details or the Suite
Rule: An ambiguous response is not confirmation. Reconcile before retrying.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69989
Design scenario with illustrative data.

## 15 · Leave with unsaved changes

HF-32 — Leave with unsaved changes
Entry: Cancel, navigate away or change domain
Action: Keep editing or discard changes
Exit: The same form or the chosen destination
Rule: Never carry Suite or worker context across domains silently.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-70171
Design scenario with illustrative data.

## 16 · Schedules

HF-01 — Schedules
Entry: Schedules menu
Action: Search, filter, sort and paginate rules
Exit: Schedule details, timeline or Suite selection
Rule: Rule state is separate from execution state. A result filter must not silently remove history.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1094-67300
Design scenario with illustrative data.

## 17 · Schedule details

HF-02 — Schedule details
Entry: A row in the rules list
Action: Inspect recurrence, upcoming dates and history. Edit or pause.
Exit: An occurrence, rule editing or pause confirmation
Rule: A running execution does not change the rule state to Running.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1094-67631
Design scenario with illustrative data.

## 18 · Optional timeline

HF-22 — Optional timeline
Entry: List / Timeline switch
Action: Choose a time window, inspect start density and select an occurrence
Exit: The occurrence inspector or a closer time view
Rule: Density counts all filtered results, regardless of pagination. It does not measure capacity.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1094-67887
Design scenario with illustrative data.

## 19 · Occurrence list

HF-04 — Occurrence list
Entry: Agenda tab
Action: Filter by date range, Suite, worker, device, state or result
Exit: Planned or completed occurrence details, or the execution
Rule: The date range filters occurrences and preserves the current query.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-67647
Design scenario with illustrative data.

## 20 · Aggregated day view

HF-05 — Aggregated day view
Entry: Day view or calendar drill-down
Action: Select an hour and paginate its occurrences
Exit: The inspector or execution
Rule: Aggregation supports the illustrative workload of 1,000 occurrences per day.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-67992
Design scenario with illustrative data.

## 21 · Week view

HF-06 — Week view
Entry: Agenda / Week
Action: Read hourly start counts and select a cell
Exit: That date and hour, or the filtered list
Rule: Intensity represents the number of starts. Failures are additional information.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-68359
Design scenario with illustrative data.

## 22 · Month view

HF-07 — Month view
Entry: Agenda / Month
Action: Select a day and inspect its totals and results
Exit: Day view for the selected date
Rule: Zero, unloaded dates and future forecasts have distinct representations.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-68967
Design scenario with illustrative data.

## 23 · Custom date range

HF-23 — Custom date range
Entry: Change the date range in Agenda
Action: Compare daily volumes and inspect the grouped list
Exit: A day, occurrence or execution
Rule: The chart and list use the same query and consistent totals.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-69315
Design scenario with illustrative data.

## 24 · Low-volume day view

HF-31 — Low-volume day view
Entry: Filter Agenda by Suite
Action: Select individual occurrences
Exit: The same inspector used by the list and aggregated day
Rule: The view adapts to density while keeping the same resource and query.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-69637
Design scenario with illustrative data.

## 25 · Date range and filters

HF-21 — Date range and filters
Entry: Date range / More filters
Action: Apply inclusive dates and explicit filters
Exit: The same view with an updated query
Rule: Pausing a rule does not remove its earlier occurrences from history.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-70939
Design scenario with illustrative data.

## 26 · Planned occurrence

HF-08 — Planned occurrence
Entry: A row, marker, hour or day
Action: Inspect dates, devices and availability. Edit or cancel.
Exit: Scope selection, the rule or a return to Agenda
Rule: These actions affect future occurrences. Cancellation does not stop an execution.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-69828
Design scenario with illustrative data.

## 27 · Completed occurrence

HF-09 — Completed occurrence
Entry: The list, day view or history
Action: Inspect actual start and finish times, duration and result
Exit: The execution, or the rule for future changes
Rule: Past occurrences are read-only.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70092
Design scenario with illustrative data.

## 28 · Series context

HF-26 — Series context
Entry: The occurrence inspector
Action: Inspect neighbouring occurrences and execution options
Exit: Another occurrence, the full series or execution
Rule: Repeat through Executions or Quick Run, with a new availability check.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70349
Design scenario with illustrative data.

## 29 · Edit scope

HF-16 — Edit scope
Entry: Edit on a future occurrence
Action: Choose only this occurrence, or this and future occurrences
Exit: The form with its scope fixed
Rule: History and running executions are not rewritten.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70582
Design scenario with illustrative data.

## 30 · Edit blocked by a conflict

HF-17 — Edit blocked by a conflict
Entry: Change an occurrence's start time
Action: Inspect the conflict and try an alternative
Exit: A new availability check or discarded changes
Rule: Keep the existing reservation until its replacement is accepted.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70769
Design scenario with illustrative data.

## 31 · Edit ready to save

HF-35 — Edit ready to save
Entry: An alternative start time after a conflict
Action: Recheck the selected occurrence and save
Exit: A confirmed change or late conflict
Rule: The selected scope stays fixed. Only confirmation replaces the earlier reservation.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1116-71728
Design scenario with illustrative data.

## 32 · Change confirmed

HF-36 — Change confirmed
Entry: A confirmed edit response
Action: Check the new time and the scope of the change
Exit: Agenda or the rule
Rule: Only the occurrence on 18 Nov changes. All other dates stay unchanged.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1116-72103
Design scenario with illustrative data.

## 33 · Cancellation scope

HF-18 — Cancellation scope
Entry: Cancel on a future occurrence
Action: Review the occurrence ID and affected dates, then confirm
Exit: The cancellation outcome
Rule: An open-ended rule affects all future occurrences. Do not invent a finite count.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-71028
Design scenario with illustrative data.

## 34 · Management outcomes

HF-19 — Management outcomes
Entry: Cancel or pause
Action: Confirm what changed and choose the next destination
Exit: Agenda, the rule or resume
Rule: Pausing or cancelling does not interrupt running executions.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-70528
Design scenario with illustrative data.

## 35 · Resume a rule

HF-30 — Resume a rule
Entry: Resume on a paused rule
Action: Recheck future dates before reactivating
Exit: The active rule, or keep it paused if conflicts remain
Rule: Missed occurrences are not replayed automatically.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-70723
Design scenario with illustrative data.

## 36 · Recovery and uncertain data

HF-20 — Recovery and uncertain data
Entry: Empty results, errors, stale data or an ambiguous response
Action: Clear filters, refresh or reconcile the request
Exit: The restored query or form, or confirmation
Rule: Unchecked availability, a failed query and zero results are different states.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-71237
Design scenario with illustrative data.

## 37 · Loading and submission

HF-28 — Loading and submission
Entry: Open a query, check availability or confirm
Action: Wait without repeating the request. Keep the context.
Exit: The result or a recovery action
Rule: Prevent duplicate requests and preserve values throughout the transition.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-71461
Design scenario with illustrative data.

## 38 · Operational exceptions

HF-29 — Operational exceptions
Entry: Changed access, session, Suite, device availability or DST
Action: Explain the block and offer a specific recovery action
Exit: Sign in, refresh, recheck or edit
Rule: These states specify proposed behaviour. They do not establish backend capability.
Source: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-71645
Design scenario with illustrative data.

## 39 · From the artifact to the product

| Area | Decision | Reference |
| --- | --- | --- |
| Overview | The rules list is the default. Timeline remains optional. | HF-01, HF-22 |
| Calendar | Day, week and month show occurrences. A date range keeps the same entity. | HF-04 to HF-07, HF-23 |
| Scheduling | The Suite supplies its worker, TestCases and devices in the current domain. | HF-10 to HF-13 |
| Conflict | Concurrent use of the same device blocks creating and editing. | HF-12, HF-17, HF-27 |
| Recurrence | Simple and Cron support end conditions and explicitly identify unchecked future dates. | HF-13, HF-25, HF-34 |
| History | Completed occurrences are read-only. Open the execution to run it again. | HF-09, HF-26 |
| Management | Explicit scope, keep the old reservation until confirmation, and resume without replay. | HF-16 to HF-19, HF-30, HF-35, HF-36 |

Index: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1122-71783

## 40 · Components and ownership

| Layer | Structure | Destination |
| --- | --- | --- |
| Existing TARS | Header, Sidebar, Button, Input, and colour, spacing and radius tokens. | Existing library |
| Rules and context | RuleRow, RuleInspector, SuitePickerRow, SuiteTestCaseRow and SuiteContextStrip. | Scheduling |
| Editor | WhenFields, RecurrenceEditor, ExecutionOptionsForm, DeviceOccupancyRow and AvailabilityRow. | Scheduling |
| Agenda | AgendaToolbar, OccurrenceRow, CalendarDay, OccurrenceCard, DensityCell and TimelineStartMarker. | Scheduling |
| Management | OccurrenceInspector, ScopeChoice, ScheduleReview and FeedbackPanel. | Scheduling |
| Generic candidates | DateRangePicker and ResourceTimelineRow require another consumer and a validated contract. | Design System proposals, unpublished |

Feature masters: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1110-69112
Design System proposals: https://www.figma.com/design/768aLZeg5iy40TrtN5Ssc2/TARS-Design-System?node-id=302-3

## 41 · States that change available actions

| Entity | States | Effect on the experience |
| --- | --- | --- |
| Rule | Active, Paused, Completed and Cancelled. | Editing or resuming affects future dates. |
| Occurrence | Scheduled, Running, Completed, Cancelled and Missed. Queued depends on the contract. | History is read-only. Running opens the execution. |
| Result | Passed, Failed or no confirmed result. | Show the result and reason without replacing the state. |
| Availability | Not checked, Checking, Available, Conflict, Failed, Stale and Unavailable. | Continue only after a valid availability check. |
| Change | Dirty, Submitting, Confirmed, Rejected and Unknown outcome. | Preserve values. Reconcile before retrying. |
| Context | Read-only access, expired session, changed Suite or timezone exception. | Explain the block and the specific recovery action. |



## 42 · Decisions needed before implementation

| Priority | Contract | Definition needed | Screens |
| --- | --- | --- | --- |
| P0 | Per-device time window | How reservations relate to estimates, runtime and retries. | HF-12, HF-24 |
| P0 | Open-ended Cron | The verified horizon and conflicts beyond it. | HF-13, HF-34 |
| P0 | Concurrency | Atomic exclusion across schedules, executions and Quick Runs. | HF-12, HF-17 |
| P0 | Ambiguous confirmation | Idempotency and outcome lookup before retrying. | HF-20, HF-28 |
| P0 | Domain and access | Permissions and anonymised occupancy from other domains. | HF-29, HF-32 |
| P0 | Cron and timezone | Dialect, missing or repeated local times, and late starts. | HF-25, HF-29 |
| P0 | Suite revision | Invalidate availability checks when the composition changes. | HF-29 |
