var prog_guides =
[
    [ "Blobstore Programmer's Guide", "blob.html", [
      [ "In this document", "blob.html#blob_pg_toc", null ],
      [ "Target Audience", "blob.html#blob_pg_audience", null ],
      [ "Introduction", "blob.html#blob_pg_intro", null ],
      [ "Theory of Operation", "blob.html#blob_pg_theory", [
        [ "Abstractions", "blob.html#autotoc_md838", null ],
        [ "Atomicity", "blob.html#autotoc_md839", null ],
        [ "Callbacks", "blob.html#autotoc_md840", null ],
        [ "Backend Support", "blob.html#autotoc_md841", null ],
        [ "Metadata Operations", "blob.html#autotoc_md842", null ],
        [ "Threads", "blob.html#autotoc_md843", null ],
        [ "Channels", "blob.html#autotoc_md844", null ],
        [ "Blob Identifiers", "blob.html#autotoc_md845", null ]
      ] ],
      [ "Design Considerations", "blob.html#blob_pg_design", [
        [ "Initialization Options", "blob.html#autotoc_md846", null ],
        [ "Sub-page Sized Operations", "blob.html#autotoc_md847", null ],
        [ "Threads", "blob.html#autotoc_md848", null ],
        [ "Data Buffer Memory", "blob.html#autotoc_md849", null ],
        [ "Error Handling", "blob.html#autotoc_md850", null ],
        [ "Asynchronous API", "blob.html#autotoc_md851", null ],
        [ "Xattrs", "blob.html#autotoc_md852", null ],
        [ "Synchronizing Metadata", "blob.html#autotoc_md853", null ],
        [ "Iterating Blobs", "blob.html#autotoc_md854", null ],
        [ "The Super Blob", "blob.html#autotoc_md855", null ]
      ] ],
      [ "Examples", "blob.html#blob_pg_examples", null ],
      [ "Configuration", "blob.html#blob_pg_config", null ],
      [ "Component Detail", "blob.html#blob_pg_component", [
        [ "Media Format", "blob.html#autotoc_md856", null ],
        [ "Blob cluster layout", "blob.html#blob_pg_cluster_layout", null ],
        [ "Thin Blobs, Snapshots, and Clones", "blob.html#autotoc_md857", [
          [ "Thin Provisioning", "blob.html#blob_pg_thin_provisioning", null ],
          [ "Snapshots and Clones", "blob.html#blob_pg_snapshots", null ],
          [ "Inflating and Decoupling Clones", "blob.html#autotoc_md858", null ],
          [ "External Snapshots and Esnap Clones", "blob.html#blob_pg_esnap_and_esnap_clone", null ],
          [ "Shallow Copy", "blob.html#blob_shallow_copy", null ],
          [ "Change the parent of a blob", "blob.html#blob_reparent", null ],
          [ "Copy-on-write", "blob.html#blob_pg_copy_on_write", null ]
        ] ],
        [ "Sequences and Batches", "blob.html#autotoc_md859", null ],
        [ "Key Internal Structures", "blob.html#autotoc_md860", null ],
        [ "Code Layout and Common Conventions", "blob.html#autotoc_md861", null ]
      ] ]
    ] ],
    [ "Block Device Layer Programming Guide", "bdev_pg.html", [
      [ "Target Audience", "bdev_pg.html#autotoc_md728", null ],
      [ "Introduction", "bdev_pg.html#autotoc_md729", null ],
      [ "Basic Primitives", "bdev_pg.html#autotoc_md730", null ],
      [ "Initializing The Library", "bdev_pg.html#autotoc_md731", null ],
      [ "Discovering Block Devices", "bdev_pg.html#autotoc_md732", null ],
      [ "Preparing To Use A Block Device", "bdev_pg.html#autotoc_md733", null ],
      [ "Sending I/O", "bdev_pg.html#autotoc_md734", null ],
      [ "Resetting A Block Device", "bdev_pg.html#autotoc_md735", null ]
    ] ],
    [ "Writing a Custom Block Device Module", "bdev_module.html", [
      [ "Target Audience", "bdev_module.html#autotoc_md722", null ],
      [ "Introduction", "bdev_module.html#autotoc_md723", null ],
      [ "Creating A New Module", "bdev_module.html#autotoc_md724", null ],
      [ "Creating Bdevs", "bdev_module.html#autotoc_md725", null ],
      [ "Creating Bdevs in an External Repository", "bdev_module.html#autotoc_md726", null ],
      [ "Creating Virtual Bdevs", "bdev_module.html#autotoc_md727", null ]
    ] ],
    [ "NVMe over Fabrics Target Programming Guide", "nvmf_tgt_pg.html", [
      [ "Target Audience", "nvmf_tgt_pg.html#autotoc_md812", null ],
      [ "Introduction", "nvmf_tgt_pg.html#autotoc_md813", null ],
      [ "Primitives", "nvmf_tgt_pg.html#autotoc_md814", null ],
      [ "The Basics", "nvmf_tgt_pg.html#autotoc_md815", null ],
      [ "Access Control", "nvmf_tgt_pg.html#autotoc_md816", null ],
      [ "Discovery Subsystems", "nvmf_tgt_pg.html#autotoc_md817", null ],
      [ "Transports", "nvmf_tgt_pg.html#autotoc_md818", null ],
      [ "Choosing a Threading Model", "nvmf_tgt_pg.html#autotoc_md819", null ],
      [ "Scaling Across CPU Cores", "nvmf_tgt_pg.html#autotoc_md820", null ],
      [ "Zero Copy Support", "nvmf_tgt_pg.html#autotoc_md821", null ],
      [ "RDMA", "nvmf_tgt_pg.html#autotoc_md822", null ]
    ] ],
    [ "Flash Translation Layer", "ftl.html", [
      [ "Terminology", "ftl.html#ftl_terminology", [
        [ "Logical to physical address map", "ftl.html#ftl_l2p", null ],
        [ "Band", "ftl.html#ftl_band", null ],
        [ "Non volatile cache", "ftl.html#ftl_nvcache", null ],
        [ "Garbage collection and relocation", "ftl.html#ftl_reloc", null ]
      ] ],
      [ "Metadata", "ftl.html#ftl_metadata", null ],
      [ "Dirty shutdown recovery", "ftl.html#ftl_dirty_shutdown", [
        [ "Shared memory recovery", "ftl.html#ftl_shm_recovery", null ],
        [ "Trim", "ftl.html#ftl_trim", null ]
      ] ],
      [ "Usage", "ftl.html#ftl_usage", [
        [ "Prerequisites", "ftl.html#ftl_prereq", null ],
        [ "FTL bdev creation", "ftl.html#ftl_create", null ]
      ] ],
      [ "FTL bdev stack", "ftl.html#ftl_bdev_stack", null ]
    ] ],
    [ "GDB Macros User Guide", "gdb_macros.html", [
      [ "Introduction", "gdb_macros.html#autotoc_md736", null ],
      [ "Loading The gdb Macros", "gdb_macros.html#autotoc_md739", null ],
      [ "Using the gdb Data Directory", "gdb_macros.html#autotoc_md741", null ],
      [ "Using .gdbinit To Load The Macros", "gdb_macros.html#autotoc_md742", null ],
      [ "Why Do We Need to Explicitly Call spdk_load_macros", "gdb_macros.html#autotoc_md745", null ],
      [ "Macros available", "gdb_macros.html#autotoc_md746", null ],
      [ "Adding New Macros", "gdb_macros.html#autotoc_md748", null ]
    ] ],
    [ "Notify library", "notify.html", [
      [ "Register event types", "notify.html#notify_register", null ],
      [ "Get info about events", "notify.html#notify_get_info", null ],
      [ "Get new events", "notify.html#notify_listen", null ],
      [ "Send events", "notify.html#notify_send", null ],
      [ "RPC Calls", "notify.html#rpc_calls", null ]
    ] ]
];