defmodule Flock.Repo do
  use Ecto.Repo,
    otp_app: :flock,
    adapter: Ecto.Adapters.Postgres
end
