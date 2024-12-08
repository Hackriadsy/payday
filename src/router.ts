// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/console`
  | `/console/payrolls`
  | `/console/payrolls/:id`
  | `/console/payrolls/:id?/beneficiaries`
  | `/onboarding`
  | `/onboarding/select-plan`

export type Params = {
  '/console/payrolls/:id': { id: string }
  '/console/payrolls/:id?/beneficiaries': { id?: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
